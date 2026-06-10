const Listing = require("../models/listing");
const Booking = require("../models/booking");
const axios = require("axios");

function parseCommaSeparated(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .flatMap((item) => String(item).split(","))
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }

  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function normalizeItinerary(itinerary) {
  if (!itinerary) return [];

  let days = Array.isArray(itinerary) ? itinerary : Object.values(itinerary);

  return days
    .map((day, index) => {
      if (!day) return null;

      return {
        day: Number(day.day) || index + 1,
        title: (day.title || "").trim(),
        subtitle: (day.subtitle || "").trim(),
        description: (day.description || "").trim(),
        stay: (day.stay || "").trim(),
        meals: parseCommaSeparated(day.meals),
        activities: parseCommaSeparated(day.activities),
        transport: {
          from: day.transport && day.transport.from ? day.transport.from.trim() : "",
          to: day.transport && day.transport.to ? day.transport.to.trim() : "",
          mode: day.transport && day.transport.mode ? day.transport.mode : "",
          distance: day.transport && day.transport.distance ? day.transport.distance.trim() : "",
          time: day.transport && day.transport.time ? day.transport.time.trim() : "",
        },
      };
    })
    .filter((day) => {
      if (!day) return false;

      return (
        day.title ||
        day.subtitle ||
        day.description ||
        day.stay ||
        day.meals.length > 0 ||
        day.activities.length > 0 ||
        day.transport.from ||
        day.transport.to ||
        day.transport.mode ||
        day.transport.distance ||
        day.transport.time
      );
    });
}

function normalizeDepartureBatches(departureBatches) {
  if (!departureBatches) return [];

  let batches = Array.isArray(departureBatches)
    ? departureBatches
    : Object.values(departureBatches);

  return batches
    .map((batch) => ({
      date: (batch.date || "").trim(),
      seats: Number(batch.seats || 0),
    }))
    .filter((batch) => batch.date);
}

function normalizeListingData(data) {
  data.inclusions = parseCommaSeparated(data.inclusions);
    if (Array.isArray(data.category)) {
    data.category = data.category[0] || "college";
  }
  data.exclusions = parseCommaSeparated(data.exclusions);
  data.tourHighlights = parseCommaSeparated(data.tourHighlights);
  data.packagePolicy = parseCommaSeparated(data.packagePolicy);
  data.cancellationPolicy = parseCommaSeparated(data.cancellationPolicy);
  data.nearbyPlaces = parseCommaSeparated(data.nearbyPlaces);

  data.itinerary = normalizeItinerary(data.itinerary);
  data.departureBatches = normalizeDepartureBatches(data.departureBatches);

  if (!data.hotel) data.hotel = {};
  if (!data.meals) data.meals = {};
  if (!data.transport) data.transport = {};

  data.mealsIncluded = !!data.mealsIncluded;
  data.sightseeingIncluded = !!data.sightseeingIncluded;
  data.hotelIncluded = !!data.hotelIncluded;
  data.transportIncluded = !!data.transportIncluded;

  data.meals.breakfast = !!data.meals.breakfast;
  data.meals.lunch = !!data.meals.lunch;
  data.meals.dinner = !!data.meals.dinner;

  data.transport.driverIncluded = !!data.transport.driverIncluded;
  data.transport.fuelIncluded = !!data.transport.fuelIncluded;

  data.price = Number(data.price || 0);
  data.pricePerPerson = Number(data.pricePerPerson || 0);

  if (data.hotel.nights !== undefined) {
    data.hotel.nights = Number(data.hotel.nights || 0);
  }

  if (data.transport.capacity !== undefined) {
    data.transport.capacity = Number(data.transport.capacity || 0);
  }

  return data;
}

module.exports.index = async (req, res) => {
  let { city, price, duration, category, search } = req.query;
  let filter = {};
  if (category) {
  filter.category = category;
}

  if (city && city !== "City") {
    filter.location = city;
  }

  if (price === "low") {
    filter.pricePerPerson = { $lte: 10000 };
  }

  if (price === "high") {
    filter.pricePerPerson = { $gte: 10000 };
  }

  if (duration && duration !== "Duration") {
    filter.duration = duration;
  }

if (category) {
  filter.category = category;
}

if (search && search.trim() !== "") {
  const keyword = search.trim();

  filter.$or = [
    { title: { $regex: keyword, $options: "i" } },
    { location: { $regex: keyword, $options: "i" } },
    { country: { $regex: keyword, $options: "i" } },
    { category: { $regex: keyword, $options: "i" } },
    { description: { $regex: keyword, $options: "i" } },
    { aboutLocation: { $regex: keyword, $options: "i" } },
    { tourHighlights: { $regex: keyword, $options: "i" } },
    { nearbyPlaces: { $regex: keyword, $options: "i" } },
    { "transport.type": { $regex: keyword, $options: "i" } },
    { startingPoint: { $regex: keyword, $options: "i" } }
  ];
}

const allListings = await Listing.find(filter);

res.render("listings/index", {
  listings: allListings,
  search: search || ""
});
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: { path: "author" },
    });

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }

  const bookings = await Booking.find({ listing: id });
  let bookedDates = bookings.map((b) => ({
    checkIn: b.checkIn,
    checkOut: b.checkOut,
  }));

  res.render("listings/show.ejs", {
    listing,
    bookedDates,
    razorpayKey: process.env.RAZORPAY_KEY_ID,
  });
};

module.exports.createListing = async (req, res) => {
  try {
    let data = req.body.listing || {};
    let location = data.location || "";
    let lat = null;
    let lng = null;

    if (location && process.env.GEOCODE_API) {
      try {
        let response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${process.env.GEOCODE_API}`
        );

        if (response.data.results && response.data.results.length > 0) {
          lat = response.data.results[0].geometry.lat;
          lng = response.data.results[0].geometry.lng;
        }
      } catch (geoErr) {
        console.log("GEOCODE ERROR:", geoErr.message);
      }
    }

    let url =
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop";
    let filename = "default";

    if (req.file) {
      url = req.file.path;
      filename = req.file.filename;
    }

    data = normalizeListingData(data);

    const newListing = new Listing({
      ...data,
      image: { url, filename },
      owner: req.user._id,
    });

    if (lat !== null && lng !== null) {
      newListing.geometry = {
        type: "Point",
        coordinates: [lng, lat],
      };
    }

    await newListing.save();

    req.flash("success", "New package created successfully!");
    res.redirect("/listings");
  } catch (err) {
    console.log("CREATE LISTING ERROR:", err);
    req.flash("error", "Error in creating listing");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body.listing || {};

    data = normalizeListingData(data);

    let listing = await Listing.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect("/listings");
    }

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
      await listing.save();
    }

    req.flash("success", "Package updated successfully!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log("UPDATE LISTING ERROR:", err);
    req.flash("error", "Error in updating listing");
    res.redirect("/listings");
  }
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
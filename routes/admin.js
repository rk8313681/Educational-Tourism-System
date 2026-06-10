const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Booking = require("../models/booking");
const Listing = require("../models/listing");
const nodemailer = require("nodemailer");

const { isLoggedIn, isAdmin } = require("../middleware");
const passport = require("passport");
const Contact = require("../models/contact");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// ADMIN LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("admin/login");
});

// ADMIN LOGIN
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
    failureFlash: true,
  }),
  (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
      req.logout((err) => {
        if (err) {
          return next(err);
        }
        req.flash("error", "Access denied. Only admin can login here.");
        return res.redirect("/admin/login");
      });
      return;
    }

    req.flash("success", "Welcome Admin!");
    res.redirect("/admin");
  }
);

// ADMIN DASHBOARD
router.get("/", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalListings = await Listing.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalContacts = await Contact.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: "pending" });

    const bookings = await Booking.find({})
      .populate("user")
      .populate("listing")
      .sort({ createdAt: -1 })
      .limit(5);

    const listings = await Listing.find({})
      .populate("owner")
      .sort({ createdAt: -1 })
      .limit(6);

    let totalRevenue = 0;
    bookings.forEach((booking) => {
      if (booking.status === "confirmed") {
        totalRevenue += booking.totalPrice || 0;
      }
    });

       res.render("admin/dashboard", {
      totalUsers,
      totalListings,
      totalBookings,
      totalContacts,
      pendingBookings,
      totalRevenue,
      bookings,
      listings,
    });
  } catch (err) {
    console.log("ADMIN DASHBOARD ERROR:", err);
    req.flash("error", "Could not load admin dashboard.");
    res.redirect("/listings");
  }
});

// ADMIN LISTINGS PAGE
router.get("/listings", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const listings = await Listing.find({})
      .populate("owner")
      .sort({ createdAt: -1 });

    res.render("admin/listings", { listings });
  } catch (err) {
    console.log("ADMIN LISTINGS ERROR:", err);
    req.flash("error", "Could not load listings.");
    res.redirect("/admin");
  }
});

// ADMIN BOOKINGS PAGE
router.get("/bookings", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("user")
      .populate("listing")
      .sort({ createdAt: -1 });

    res.render("admin/bookings", { bookings });
  } catch (err) {
    console.log("ADMIN BOOKINGS ERROR:", err);
    req.flash("error", "Could not load bookings.");
    res.redirect("/admin");
  }
});
router.post("/bookings/:id/verify", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/admin/bookings");
    }

    if (!booking.collegeProof || !booking.collegeProof.url) {
      req.flash("error", "College proof not uploaded.");
      return res.redirect("/admin/bookings");
    }

    booking.verificationStatus = "verified";
    booking.adminNote = "College proof verified by admin.";

    await booking.save();

    req.flash("success", "Document verified successfully.");
    res.redirect("/admin/bookings");
  } catch (err) {
    console.log("VERIFY DOCUMENT ERROR:", err);
    req.flash("error", "Could not verify document.");
    res.redirect("/admin/bookings");
  }
});

// APPROVE BOOKING REQUEST
router.post("/bookings/:id/approve", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id);

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/admin/bookings");
    }

    if (booking.status !== "pending") {
      req.flash("error", "Only pending bookings can be approved.");
      return res.redirect("/admin/bookings");
    }

    const listing = await Listing.findById(booking.listing);

    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/admin/bookings");
    }

    const batchIndex = (listing.departureBatches || []).findIndex(
      (b) => String(b.date).trim() === String(booking.departure).trim()
    );

    if (batchIndex === -1) {
      req.flash("error", "Selected departure batch not found.");
      return res.redirect("/admin/bookings");
    }

    const batch = listing.departureBatches[batchIndex];

    const availableSeats = Number(batch.seats || 0);
    const bookingStudents = Number(booking.students || 0);

    if (availableSeats < bookingStudents) {
      req.flash(
        "error",
        `Not enough seats. Available: ${availableSeats}, Requested: ${bookingStudents}`
      );
      return res.redirect("/admin/bookings");
    }

    listing.departureBatches[batchIndex].seats = availableSeats - bookingStudents;
    listing.markModified("departureBatches");
    await listing.save();

    booking.status = "payment_pending";
    booking.paymentStatus = "pending";
    booking.adminNote = req.body.adminNote || "Approved. Waiting for payment.";

    await booking.save();

    req.flash("success", "Booking approved successfully. User can now pay.");
    return res.redirect("/admin/bookings");
  } catch (err) {
    console.log("APPROVE BOOKING ERROR:", err.message);
    console.log(err);
    req.flash("error", err.message || "Could not approve booking.");
    return res.redirect("/admin/bookings");
  }
});

// PROCEED ANYWAY FOR LOW BOOKING
router.post("/bookings/:id/proceed", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("listing");

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/admin/bookings");
    }

    if (booking.status !== "low_booking") {
      req.flash("error", "Only low booking requests can proceed anyway.");
      return res.redirect("/admin/bookings");
    }

    const listing = await Listing.findById(booking.listing._id);

    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/admin/bookings");
    }

    const batch = (listing.departureBatches || []).find(
      (b) => String(b.date) === String(booking.departure)
    );

    if (!batch) {
      req.flash("error", "Selected batch not found.");
      return res.redirect("/admin/bookings");
    }

    if (Number(batch.seats || 0) < Number(booking.students || 0)) {
      req.flash("error", "Not enough seats available.");
      return res.redirect("/admin/bookings");
    }

    batch.seats = Number(batch.seats || 0) - Number(booking.students || 0);
    await listing.save();

    booking.status = "payment_pending";
    booking.finalDecision = "proceed_anyway";
    booking.decisionDate = new Date();
    booking.adminNote =
      req.body.adminNote ||
      "Admin approved this tour with low booking. Payment is now allowed.";

    await booking.save();

    req.flash("success", "Low booking approved. User can now pay.");
    res.redirect("/admin/bookings");
  } catch (err) {
    console.log("PROCEED LOW BOOKING ERROR:", err);
    req.flash("error", "Could not proceed with low booking.");
    res.redirect("/admin/bookings");
  }
});

// RESCHEDULE LOW BOOKING
router.post("/bookings/:id/reschedule", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/admin/bookings");
    }

    if (booking.status !== "low_booking") {
      req.flash("error", "Only low booking requests can be rescheduled.");
      return res.redirect("/admin/bookings");
    }

    booking.status = "pending";
booking.finalDecision = "rescheduled";
booking.decisionDate = new Date();
booking.rescheduledDeparture =
  req.body.newDeparture || "Next Available Batch";
    booking.adminNote =
      req.body.adminNote ||
      "This booking has been rescheduled by admin. Please wait for further confirmation.";

    await booking.save();

    req.flash("success", "Booking marked for reschedule.");
    res.redirect("/admin/bookings");
  } catch (err) {
    console.log("RESCHEDULE BOOKING ERROR:", err);
    req.flash("error", "Could not reschedule booking.");
    res.redirect("/admin/bookings");
  }
});

// REJECT BOOKING REQUEST
router.post("/bookings/:id/reject", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id).populate("listing");

if (!booking) {
  req.flash("error", "Booking not found.");
  return res.redirect("/admin/bookings");
}

const listing = await Listing.findById(booking.listing._id);

if (listing) {
  const batch = (listing.departureBatches || []).find(
    (b) => String(b.date) === String(booking.departure)
  );

  // restore seats only if booking had already locked seats
  if (
    batch &&
    ["payment_pending", "paid", "confirmed"].includes(booking.status)
  ) {
    batch.seats = Number(batch.seats || 0) + Number(booking.students || 0);
    await listing.save();
  }
}

booking.status = "cancelled";
booking.finalDecision = "refund_initiated";
booking.refundStatus = "requested";
booking.decisionDate = new Date();
booking.cancelledBy = "admin";
booking.cancelReason = req.body.cancelReason || "Rejected by admin";
booking.adminNote = req.body.adminNote || "";

await booking.save();

    req.flash("success", "Booking rejected successfully.");
    res.redirect("/admin/bookings");
  } catch (err) {
    console.log("REJECT BOOKING ERROR:", err);
    req.flash("error", "Could not reject booking.");
    res.redirect("/admin/bookings");
  }
});

// ADMIN USERS PAGE
router.get("/users", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}).sort({ username: 1 });
    res.render("admin/users", { users });
  } catch (err) {
    console.log("ADMIN USERS ERROR:", err);
    req.flash("error", "Could not load users.");
    res.redirect("/admin");
  }
});

// ADMIN PAYMENTS PAGE
router.get("/payments", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("user")
      .populate("listing")
      .sort({ createdAt: -1 });

    res.render("admin/payments", { bookings });
  } catch (err) {
    console.log("ADMIN PAYMENTS ERROR:", err);
    req.flash("error", "Could not load payments.");
    res.redirect("/admin");
  }
});

// DELETE USER
router.delete("/users/:id", isLoggedIn, isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    req.flash("success", "User deleted successfully!");
    res.redirect("/admin/users");
  } catch (err) {
    console.log("DELETE USER ERROR:", err);
    req.flash("error", "Could not delete user.");
    res.redirect("/admin/users");
  }
});

// DELETE BOOKING
router.delete("/bookings/:id", isLoggedIn, isAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      req.flash("error", "Booking not found.");
      return res.redirect("/admin/bookings");
    }

    // FIND LISTING
    const listing = await Listing.findById(booking.listing);

    if (listing) {
      // FIND MATCHING BATCH
      const batch = (listing.departureBatches || []).find(
        (b) => String(b.date).trim() === String(booking.departure).trim()
      );

      /*
        Restore seats ONLY if seats were already deducted
      */

      if (
        batch &&
        ["payment_pending", "paid", "confirmed"].includes(booking.status)
      ) {
        batch.seats =
          Number(batch.seats || 0) + Number(booking.students || 0);

        // prevent overflow
        if (batch.maxSeats && batch.seats > batch.maxSeats) {
          batch.seats = batch.maxSeats;
        }

        listing.markModified("departureBatches");

        await listing.save();
      }
    }

    await Booking.findByIdAndDelete(req.params.id);

    req.flash(
      "success",
      "Booking deleted and seats restored successfully!"
    );

    res.redirect("/admin/bookings");

  } catch (err) {
    console.log("DELETE BOOKING ERROR:", err);

    req.flash("error", "Could not delete booking.");

    res.redirect("/admin/bookings");
  }
});

// DELETE LISTING
router.delete("/listings/:id", isLoggedIn, isAdmin, async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/admin/listings");
  } catch (err) {
    console.log("DELETE LISTING ERROR:", err);
    req.flash("error", "Could not delete listing.");
    res.redirect("/admin/listings");
  }
});

router.get("/contacts", isLoggedIn, isAdmin, async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.render("admin/contacts", { contacts });
});

router.delete("/contacts/:id", isLoggedIn, isAdmin, async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  req.flash("success", "Contact inquiry deleted successfully.");
  res.redirect("/admin/contacts");
});

// VERIFY SINGLE STUDENT
router.post(
  "/bookings/:bookingId/students/:studentIndex/verify",
  isLoggedIn,
  isAdmin,
  async (req, res) => {

    try {

      const booking = await Booking.findById(req.params.bookingId);

      if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/admin/bookings");
      }

      const index = Number(req.params.studentIndex);

      if (
        !booking.studentsData ||
        !booking.studentsData[index]
      ) {
        req.flash("error", "Student not found");
        return res.redirect("/admin/bookings");
      }

      booking.studentsData[index].verificationStatus =
        "verified";

      await booking.save();

      req.flash(
        "success",
        "Student verified successfully"
      );

      res.redirect("/admin/bookings");

    } catch (err) {

      console.log(err);

      req.flash(
        "error",
        "Could not verify student"
      );

      res.redirect("/admin/bookings");
    }
  }
);

module.exports = router;
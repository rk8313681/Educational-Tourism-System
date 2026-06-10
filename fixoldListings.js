require("dotenv").config();
console.log("API KEY:", process.env.GEOCODE_API);

const mongoose = require("mongoose");
const Listing = require("./models/listing");
const axios = require("axios");

// 🔥 delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err));

const updateListings = async () => {
  const listings = await Listing.find({});

  for (let listing of listings) {

    await delay(1000); // 🔥 important

    if (!listing.geometry || !listing.geometry.coordinates.length) {
      try {
        let response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${listing.location}&key=${process.env.GEOCODE_API}`
        );

        if (response.data.results.length > 0) {
          let lat = response.data.results[0].geometry.lat;
          let lng = response.data.results[0].geometry.lng;

          listing.geometry = {
            type: "Point",
            coordinates: [lng, lat]
          };

          await listing.save();
          console.log("✅ Updated:", listing.location);

        } else {
          console.log("⚠️ No result:", listing.location);
        }

      } catch (err) {
        console.log("❌ API Error:", listing.location);
      }
    }
  }

  mongoose.connection.close();
};

updateListings();
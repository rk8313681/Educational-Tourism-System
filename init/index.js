require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/user";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const dataWithOwner = initData.map((obj) => ({
    ...obj,
    owner: "69b403730b28c4f36bd3224d",
  }));

  await Listing.insertMany(dataWithOwner);
  console.log("data was initialized");
};

initDB();
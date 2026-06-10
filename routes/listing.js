const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js")
const multer=require("multer");
const{storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.route("/")
.get(wrapAsync (listingController.index))
.post(
    isLoggedIn,  
    upload.array("listing[images]"),
    validateListing,
    wrapAsync (listingController.createListing)
);

// New Route
router.get ("/new", isLoggedIn, listingController.renderNewForm );
// Search Suggestions Route
router.get("/search-suggestions", wrapAsync(async (req, res) => {
  const { q } = req.query;

  if (!q || q.trim() === "") {
    return res.json([]);
  }

  const keyword = q.trim();

  const listings = await Listing.find({
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { location: { $regex: keyword, $options: "i" } },
      { country: { $regex: keyword, $options: "i" } },
      { category: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
      { tourHighlights: { $regex: keyword, $options: "i" } },
      { nearbyPlaces: { $regex: keyword, $options: "i" } }
    ]
  }).limit(6);

  const suggestions = listings.map((listing) => ({
    title: listing.title,
    location: listing.location || "India",
    category: listing.category || "Educational Tour"
  }));

  res.json(suggestions);
}));

/* SAFETY PAGE */
router.get("/safety", (req, res) => {
  res.render("safety");
});

router.route("/:id")
.get(wrapAsync (listingController.showListing))
.put(isLoggedIn,
     isOwner,
     upload.single("listing[image]"),
     validateListing, wrapAsync (listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync (listingController.destroyListing))

// Edit route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync (listingController.renderEditForm));


module.exports=router;
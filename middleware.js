const Listing=require("./models/listing");
const Review=require("./models/review");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema, reviewSchema,} = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // AJAX / fetch request ke liye JSON response
    if (req.xhr || req.headers.accept?.includes("application/json")) {
      return res.status(401).json({
        loginRequired: true,
        redirectUrl: "/login",
        error: "Please login first to book a tour.",
      });
    }

    req.flash("error", "Please login first to book a tour.");
    return res.redirect("/login");
  }

  next();
};

module.exports.isAdmin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Please login first.");
    return res.redirect("/admin/login");
  }

  if (!req.user || req.user.role !== "admin") {
    req.flash("error", "Access denied. Admins only.");
    return res.redirect("/listings");
  }

  next();
};

module.exports.saveRedirectUrl=(req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Tour not found.");
    return res.redirect("/listings");
  }

  if (!listing.owner || !listing.owner.equals(req.user._id)) {
    req.flash("error", "Only the admin who created this tour can edit or delete it.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};


module.exports.validateListing=(req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
   if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
   }else{
    next();
   }
};


module.exports.validateReview=(req, res, next) =>{
    let {error} = reviewSchema.validate(req.body);
   if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
   }else{
    next();
   }
};

module.exports.isReviewAuthor= async(req, res, next) =>{
    let {id, reviewId}=req.params;
    let review=await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        // req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
     next();
};
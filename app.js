require("dotenv").config();
const express=require("express");
const app=express();
const mongoose = require("mongoose");
const path= require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const bookingRoutes = require("./routes/bookings");
const adminRoutes = require("./routes/admin");
const contactRoutes = require("./routes/contact");
const eventRoutes = require("./routes/events");


const MONGO_URL="mongodb://127.0.0.1:27017/user";

main().then(() => {
   console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join (__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user);
        }

        const email = profile.emails && profile.emails[0] ? profile.emails[0].value : "";

        user = await User.findOne({ email });

        if (user) {
          user.googleId = profile.id;
          await user.save();
          return done(null, user);
        }

        const username =
          email.split("@")[0] + "_" + profile.id.slice(-5);

        const newUser = new User({
          username,
          email,
          googleId: profile.id,
        });

        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.currentPath = req.path;
    res.locals.query = req.query;
    next();
});

async function main() {
  await mongoose.connect(MONGO_URL);    
}

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);

app.use("/bookings", bookingRoutes);
app.use("/admin", adminRoutes);
app.get("/privacy", (req, res) => {
  res.render("privacy");
});

app.get("/terms", (req, res) => {
  res.render("terms");
});
app.use("/contact", contactRoutes);
app.use("/events", eventRoutes);
app.use("/", userRouter);

app.get("/about", (req, res) => {
    res.render("about");
});

app.use( (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let {statusCode=500, message="Something went wrong"}=err;
    res.status(statusCode).render("error.ejs", {message});
    // res.status(statusCode).send(message);
});

app.listen(8080,() => {
    console.log("server is listning to port 8080");
});
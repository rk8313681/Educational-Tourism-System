const express = require("express");
const router = express.Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const User = require("../models/user");

const { isLoggedIn } = require("../middleware");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});
// GOOGLE LOGIN / SIGNUP
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "Logged in with Google successfully!");
    res.redirect("/listings");
  }
);

router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({
      email,
      username
    });

    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }

      req.flash("success", "Welcome to Educational Tourism!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
});

router.get("/login", (req, res) => {
  res.render("users/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
  }),
  (req, res) => {
    console.log("USER LOGIN:", req.user.username, req.user.role);
    req.flash("success", "Welcome back!");
    res.redirect("/listings");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    req.flash("success", "Logged out successfully!");
    res.redirect("/listings");
  });
});

router.get("/forgot", (req, res) => {
  res.render("users/forgot");
});

router.post("/forgot", async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.findOne({ username, email });

    if (!user) {
      req.flash("error", "No account found with this username and email.");
      return res.redirect("/forgot");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Educational Tourism Password Reset OTP",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #9a825c;">Educational Tourism</h2>
          <p>Hello,</p>
          <p>Your OTP for password reset is:</p>
          <h1 style="letter-spacing: 4px; color: #c79a3b;">${otp}</h1>
          <p>This OTP is valid for 10 minutes.</p>
          <p>If you did not request this, please ignore this email.</p>
        </div>
      `
    });

    req.flash("success", "OTP sent to your email successfully.");
    res.redirect("/verify-otp");
  } catch (err) {
    console.log(err);
    req.flash("error", "Something went wrong while sending OTP.");
    res.redirect("/forgot");
  }
});

router.get("/verify-otp", (req, res) => {
  res.render("users/verifyOtp");
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { username, email, otp, newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      req.flash("error", "Password must be at least 6 characters long.");
      return res.redirect("/verify-otp");
    }

    const user = await User.findOne({ username, email });

    if (!user) {
      req.flash("error", "User not found with this username and email.");
      return res.redirect("/verify-otp");
    }

    if (!user.otp || !user.otpExpiry) {
      req.flash("error", "No OTP found. Please request a new OTP.");
      return res.redirect("/forgot");
    }

    if (String(user.otp).trim() !== String(otp).trim()) {
      req.flash("error", "Invalid OTP.");
      return res.redirect("/verify-otp");
    }

    if (new Date(user.otpExpiry).getTime() < Date.now()) {
      req.flash("error", "OTP has expired.");
      return res.redirect("/forgot");
    }

    await new Promise((resolve, reject) => {
      let done = false;

      const finishResolve = () => {
        if (!done) {
          done = true;
          resolve();
        }
      };

      const finishReject = (err) => {
        if (!done) {
          done = true;
          reject(err);
        }
      };

      try {
        const maybePromise = user.setPassword(newPassword, (err) => {
          if (err) return finishReject(err);
          finishResolve();
        });

        if (maybePromise && typeof maybePromise.then === "function") {
          maybePromise.then(finishResolve).catch(finishReject);
        }
      } catch (err) {
        finishReject(err);
      }
    });

    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    console.log("PASSWORD RESET DONE FOR:", user.username);

    req.flash("success", "Password reset successful. Please login with your new password.");
    return res.redirect("/login");
  } catch (err) {
    console.log("VERIFY OTP ERROR:", err);
    req.flash("error", "Could not reset password.");
    return res.redirect("/verify-otp");
  }
});
// Profile page
router.get("/profile", isLoggedIn, (req, res) => {
  res.render("users/profile.ejs");
});

module.exports = router;
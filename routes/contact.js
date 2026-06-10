const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const { isLoggedIn } = require("../middleware");

// Contact page open sab ke liye
router.get("/", (req, res) => {
  res.render("contact");
});

// Contact form submit sirf logged-in user ke liye
router.post("/", isLoggedIn, async (req, res) => {
  try {
    const { fullName, email, phone, institution, subject, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      institution,
      subject,
      message,
    });

    await newContact.save();

    req.flash("success", "Your inquiry has been sent successfully!");
    res.redirect("/contact");
  } catch (err) {
    req.flash("error", "Failed to send inquiry. Please try again.");
    res.redirect("/contact");
  }
});

module.exports = router;
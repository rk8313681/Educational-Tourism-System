const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const passportLocalMongooseModule = require("passport-local-mongoose");
const passportLocalMongoose = passportLocalMongooseModule.default || passportLocalMongooseModule;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  googleId: {
  type: String,
  default: "",
},

  resetToken: String,
  resetTokenExpiry: Date,
  otp: String,
  otpExpiry: Date
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
router.get("/forgot", (req, res) => {
  res.render("users/forgot.ejs");
});

router.post("/forgot", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    req.flash("error", "User not found");
    return res.redirect("/forgot");
  }

  const token = crypto.randomBytes(32).toString("hex");

  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000;

  await user.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  });

  const resetURL = `http://localhost:8080/reset/${token}`;

  await transporter.sendMail({
    to: user.email,
    subject: "Password Reset",
    html: `<a href="${resetURL}">Reset Password</a>`
  });

  req.flash("success", "Reset link sent to email");
  res.redirect("/login");
});
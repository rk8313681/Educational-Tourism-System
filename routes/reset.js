router.get("/reset/:token", async (req, res) => {
  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) {
    req.flash("error", "Token expired");
    return res.redirect("/forgot");
  }

  res.render("users/reset.ejs", { token: req.params.token });
});


router.post("/reset/:token", async (req, res) => {
  const { password } = req.body;

  const user = await User.findOne({
    resetToken: req.params.token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) {
    req.flash("error", "Token expired");
    return res.redirect("/forgot");
  }

  await user.setPassword(password);

  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;

  await user.save();

  req.flash("success", "Password updated");
  res.redirect("/login");
});
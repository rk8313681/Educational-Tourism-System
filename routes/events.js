const express = require("express");
const router = express.Router();

// Events page
router.get("/", (req, res) => {
  const { type } = req.query;

  res.render("events/index.ejs", { type });
});

module.exports = router;
const express = require("express");

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("Welcome to the user section");
});

module.exports = router;

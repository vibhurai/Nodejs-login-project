const express = require("express");
const router = express.Router();
const { ensureAuthenicated } = require("../config/auth");

// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Dashboard Page
router.get("/dashboard", ensureAuthenicated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
  })
);

module.exports = router;

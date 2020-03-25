const express = require("express");
const router = express.Router();

router.get("/logged", (req, res) => {
  console.log("user", req.user.displayName, req.user.photos[0].value);
  res.render("logged", {
    userName: req.user.displayName,
    photo: req.user.photos[0].value
  });
});

router.get("/profile", (req, res) => {
  if (req.user) {
    res.render("profile", {
      userName: req.user.displayName,
      photo: req.user.photos[0].value
    });
  } else {
    res.redirect("/user/no-permission");
  }
});

router.get("/profile/settings", (req, res) => {
  if (req.user) {
    res.render("settings");
  } else {
    res.redirect("/user/no-permission");
  }
});

router.get("/no-permission", (req, res) => {
  res.render("noPermission");
});

module.exports = router;

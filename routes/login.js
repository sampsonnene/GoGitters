const express = require("express");
const router = express.Router();

// router.use(express.json());
// router.use(express.urlencoded({ extended: true}));

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

  res.render('./index', {
    username,
    password
  })
});

module.exports = router;
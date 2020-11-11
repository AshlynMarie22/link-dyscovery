const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../models");

// Sign Up
router.post("/api/signup", (req, res) => {
  const { emailAddress, password } = req.body;

  if (!emailAddress.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        // console.log(hashedPassword);
        db.User.create({
          emailAddress: emailAddress,
          password: hashedPassword,
        })
          .then((newUser) => {
            const token = jwt.sign(
              { _id: newUser._id, emailAddress: newUser.emailAddress },
              process.env.SECRET
            );
            res.json({
              error: false,
              data: token,
              message:
                "Email and Password accepted. Account successfully created.",
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Unable to sign up.",
            });
          });
      })
      .catch((err) => {
        res.status(500);
      });
  }
});

// Login
router.post("/api/login", (req, res) => {
  const { emailAddress, password } = req.body;

  db.User.findOne({ emailAddress: emailAddress }).then((foundUser) => {
    if (foundUser) {
      //   console.log(foundUser);
      bcrypt
        .compare(password, foundUser.password)
        .then(function (result) {
          if (result) {
            const token = jwt.sign(
              { _id: foundUser._id, emailAddress: foundUser.emailAddress },
              process.env.SECRET
            );
            res.json({
              error: false,
              data: token,
              message: "Email and Password correct. You are logged in.",
            });
          } else {
            res.status(401).json({
              error: true,
              data: null,
              message: "Login Failed",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // console.log(foundUser);
  });
});

module.exports = router;

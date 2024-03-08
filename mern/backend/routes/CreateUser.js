const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({min: 5})
    ,
    async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

    try {
      const newUser = new user({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: req.body.password,
      });

      await newUser.save();

      res.json({ success: true });
    } catch (error) {
      console.error(`Error creating user: ${error}`);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" }); // Informative error message
    }
  }
);

module.exports = router;

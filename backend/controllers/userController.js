const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Make sure to update the path
const dbConnection = require("./dbconnection");

// Route to handle user submissions
router.post("/submit", async (req, res) => {
  const { email, url, keywords } = req.body;

  try {
    const newUser = new User({ email, url, keywords });
    await newUser.save();
    res.status(201).json({ message: "User data saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving user data" });
  }
});

// Route to handle form submissions from the frontend
router.post("/form", async (req, res) => {
  const { email, inputType, inputValue } = req.body;

  try {
    const newUser = new User({ email, inputType, inputValue });
    await newUser.save();
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form data" });
  }
});

module.exports = router;

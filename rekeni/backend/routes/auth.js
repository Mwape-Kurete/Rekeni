const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create and save new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { username, email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

//Handle Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare entered password with the hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

module.exports = router;

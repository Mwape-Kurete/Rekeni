const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Route to add album to favorites
router.post("/:albumId", async (req, res) => {
  const { userId } = req.body;
  const { albumId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Check if album is already in favorites
    if (user.favorites.includes(albumId)) {
      return res.status(400).json({ error: "Album is already in favourites" });
    }

    // Add album to favorites
    user.favorites.push(albumId);
    await user.save();
    res.status(200).json({ message: "Album added to favourites" });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Failed to add album to favourites",
        details: error.message,
      });
  }
});

module.exports = router;

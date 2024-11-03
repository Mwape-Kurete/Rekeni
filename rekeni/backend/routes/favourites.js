const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Route to add album to favourites
router.post("/:albumId", async (req, res) => {
  const { userId, title, artist } = req.body;
  const { albumId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Check if the album is already in favourites
    if (user.favourites.some((fav) => fav.albumId === albumId)) {
      return res.status(400).json({ error: "Album is already in favourites" });
    }

    // Check if the favourites list has reached the maximum of 5 albums
    if (user.favourites.length >= 5) {
      return res
        .status(400)
        .json({ error: "Maximum of 5 albums allowed in favourites" });
    }

    // Add album to favourites with additional details
    user.favourites.push({ albumId, title, artist });
    await user.save();
    res.status(200).json({
      message: "Album added to favourites",
      favourites: user.favourites,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add album to favourites",
      details: error.message,
    });
  }
});

// Route to delete album from favourites
router.delete("/:albumId", async (req, res) => {
  const { userId } = req.body;
  const { albumId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find and remove the album from favourites
    const albumIndex = user.favourites.findIndex(
      (fav) => fav.albumId === albumId
    );
    if (albumIndex === -1) {
      return res.status(400).json({ error: "Album not found in favourites" });
    }

    user.favourites.splice(albumIndex, 1);
    await user.save();
    res
      .status(200)
      .json({
        message: "Album removed from favourites",
        favourites: user.favourites,
      });
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete album from favourites",
      details: error.message,
    });
  }
});

module.exports = router;

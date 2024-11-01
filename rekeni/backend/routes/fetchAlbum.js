const express = require("express");
const Album = require("../models/Album"); // Import Album model

const router = express.Router();
console.log("fetchAlbums.js file has loaded");

router.get("/:albumId", async (req, res) => {
  console.log("inside /api/fetchAlbum endpoint");

  const { albumId } = req.params;

  if (!albumId) {
    return res.status(400).json({ error: "An Album ID is required" });
  }

  try {
    // Query by spotifyId instead of _id
    const singleAlbum = await Album.findOne({ spotifyId: albumId }).populate(
      "reviews"
    );

    if (!singleAlbum) {
      return res.status(404).json({ error: "Album not found" });
    }
    res.json(singleAlbum);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: "Failed to retrieve album data" });
  }
});

module.exports = router;

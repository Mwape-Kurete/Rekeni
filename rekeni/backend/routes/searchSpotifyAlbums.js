const express = require("express");
const { searchSpotifyAlbums } = require("../services/spotify");
const router = express.Router();

console.log("searchSpotifyAlbums.js file loaded");

router.get("/", async (req, res) => {
  console.log("Inside /api/searchAlbums endpoint");
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    const albums = await searchSpotifyAlbums(query);
    console.log("Albums found:", albums); // Logging API result
    res.status(200).json(albums);
  } catch (error) {
    console.error("Failed to search Spotify albums:", error);
    res.status(500).json({ error: "Failed to search Spotify albums" });
  }
});

module.exports = router;

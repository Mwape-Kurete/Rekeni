const express = require("express");
const Album = require("../models/Album");
const { searchiTunes } = require("../services/itunes");
const router = express.Router();

router.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    // Search for albums on iTunes
    const searchResults = await searchiTunes(query);

    // Save albums to MongoDB if they don't already exist
    for (const result of searchResults) {
      const existingAlbum = await Album.findOne({
        iTunesId: result.collectionId,
      });
      if (!existingAlbum) {
        const newAlbum = new Album({
          title: result.collectionName,
          artist: result.artistName,
          genre: result.primaryGenreName,
          releaseDate: result.releaseDate,
          artworkUrl: result.artworkUrl100,
          iTunesId: result.collectionId,
        });
        await newAlbum.save();
      }
    }

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "Failed to search albums on iTunes" });
  }
});

module.exports = router;

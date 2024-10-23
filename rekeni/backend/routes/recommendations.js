const express = require("express");
const User = require("../models/User");
const { getSimilarArtists } = require("../services/lastfm"); // Import the Last.fm service
const { getSimilarMusic } = require("../services/tastedive"); // Import the TasteDive service
const router = express.Router();

router.get("/recommendations/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("favorites");
    if (!user) return res.status(404).json({ error: "User not found" });

    // Gather recommendations based on user's favorite albums
    const recommendations = [];

    // Iterate over user's favorite albums and get similar artists
    for (const album of user.favorites) {
      // Get similar artists from Last.fm
      const similarArtists = await getSimilarArtists(album.artist);

      // Get similar music from TasteDive
      const similarMusic = await getSimilarMusic(album.artist);

      // Combine the results and push to the recommendations array
      recommendations.push(...similarArtists, ...similarMusic);
    }

    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;

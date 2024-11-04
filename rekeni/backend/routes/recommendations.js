const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {
  getArtistRecommendationsSpotify,
  getArtistRecommendationsLastFM,
  getSimilarArtistsTasteDive,
} = require("../services/recommendationService");

const fetchWithTimeout = (fetchPromise, timeout = 10000) => {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  );
  return Promise.race([fetchPromise, timeoutPromise]);
};

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("favorites");
    if (!user) return res.status(404).json({ error: "User not found" });

    const excludedArtists = new Set(
      user.favorites.map((album) => album.artist.toLowerCase())
    );

    const recommendations = [];
    for (const album of user.favorites) {
      try {
        const [spotifyResults, lastFMResults, tasteDiveResults] =
          await Promise.all([
            fetchWithTimeout(
              getArtistRecommendationsSpotify(album.artist),
              10000
            ),
            fetchWithTimeout(
              getArtistRecommendationsLastFM(album.artist),
              10000
            ),
            fetchWithTimeout(getSimilarArtistsTasteDive(album.artist), 10000),
          ]);

        recommendations.push(
          ...[...spotifyResults, ...lastFMResults, ...tasteDiveResults].filter(
            (rec) =>
              rec.artist && !excludedArtists.has(rec.artist.toLowerCase())
          )
        );
      } catch (err) {
        console.error(
          `Error fetching recommendations for ${album.artist}:`,
          err.message
        );
      }
    }

    const uniqueRecommendations = recommendations
      .filter(
        (rec, index, self) =>
          index ===
          self.findIndex(
            (r) => r.artist.toLowerCase() === rec.artist.toLowerCase()
          )
      )
      .slice(0, 25);

    return res.status(200).json(uniqueRecommendations);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;

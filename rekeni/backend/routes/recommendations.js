const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Ensure User model is imported correctly

const {
  getArtistRecommendationsSpotify,
  getArtistRecommendationsLastFM,
  getSimilarArtistsTasteDive,
} = require("../services/recommendationService");

console.log("Recommendation route has loaded");

// Get unique recommendations
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log("Received request for recommendations for userId:", userId);

  try {
    const user = await User.findById(userId).populate("favorites");
    if (!user) {
      console.error("User not found for userId:", userId);
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found:", user.username);
    console.log("User favorites:", user.favorites);

    const recommendations = [];

    for (const album of user.favorites) {
      console.log("Fetching recommendations for album artist:", album.artist);

      try {
        const [spotifyResults, lastFMResults, tasteDiveResults] =
          await Promise.all([
            getArtistRecommendationsSpotify(album.artist),
            getArtistRecommendationsLastFM(album.artist),
            getSimilarArtistsTasteDive(album.artist),
          ]);

        console.log("Spotify results for", album.artist, ":", spotifyResults);
        console.log("LastFM results for", album.artist, ":", lastFMResults);
        console.log(
          "TasteDive results for",
          album.artist,
          ":",
          tasteDiveResults
        );

        recommendations.push(
          ...spotifyResults,
          ...lastFMResults,
          ...tasteDiveResults
        );
      } catch (artistError) {
        console.error(
          `Error fetching recommendations for artist ${album.artist}:`,
          artistError
        );
        // Optionally, handle the error here without responding directly
      }
    }

    const uniqueRecommendations = recommendations
      .filter(
        (rec, index, self) => index === self.findIndex((r) => r.id === rec.id)
      )
      .slice(0, 25); // Limit results to 25 unique recommendations

    console.log("Final unique recommendations:", uniqueRecommendations);
    return res.status(200).json(uniqueRecommendations); // Ensure only one response
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;

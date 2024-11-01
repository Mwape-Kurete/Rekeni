const express = require("express");
const router = express.Router();

const {
  getArtistRecommendationsSpotify,
  getArtistRecommendationsLastFM,
  getSimilarArtistsTasteDive,
} = require("../services/recommendationService");

router.get("/", async (req, res) => {
  const { artistQuery } = req.query;
  console.log("Recieved artist: ", artistQuery);

  if (!artistQuery) {
    return res
      .status(400)
      .json({ error: "Artist query is required for discovery" });
  }

  try {
    // Fetch similar artists and their top albums from each API
    const [spotifyResults, lastFMResults, tasteDiveResults] = await Promise.all(
      [
        getArtistRecommendationsSpotify(artistQuery),
        getArtistRecommendationsLastFM(artistQuery),
        getSimilarArtistsTasteDive(artistQuery),
      ]
    );

    // Combine all results and merge unique artists by name
    const allRecommendations = [
      ...spotifyResults,
      ...lastFMResults,
      ...tasteDiveResults,
    ];

    // Remove duplicates by artist name
    const uniqueRecommendations = allRecommendations.filter(
      (artist, index, self) =>
        index === self.findIndex((a) => a.artist === artist.artist)
    );

    res.status(200).json(uniqueRecommendations);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getArtistRecommendationsSpotify,
  getArtistRecommendationsLastFM,
  getSimilarArtistsTasteDive,
} = require("../services/recommendationService");

router.get("/", async (req, res) => {
  const { artistQuery } = req.query;

  if (!artistQuery) {
    return res
      .status(400)
      .json({ error: "Artist query is required for discovery" });
  }

  try {
    // Fetch similar artists and their top albums from each API
    const spotifyRecommendations = await getArtistRecommendationsSpotify(
      artistQuery
    );
    const lastFMRecommendations = await getArtistRecommendationsLastFM(
      artistQuery
    );
    const tasteDiveRecommendations = await getSimilarArtistsTasteDive(
      artistQuery
    );

    // Combine all results and merge unique artists by name
    const allRecommendations = [
      ...spotifyRecommendations,
      ...lastFMRecommendations,
      ...tasteDiveRecommendations,
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

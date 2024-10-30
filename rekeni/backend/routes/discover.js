const express = require("express");
const router = express.Router();

const {
  getSimilarSpotify,
  getSimilarLastFM,
  getSimilarTasteDive,
} = require("../services/recommendationService");

router.get("/", async (req, res) => {
  const { albumQuery } = req.query;

  if (!albumQuery) {
    return res
      .status(400)
      .json({ error: "Album query is required for discovery" });
  }

  try {
    // Fetch recommendations from each service
    const spotifyRecommendations = await getSimilarSpotify(albumQuery);
    const lastFMRecommendations = await getSimilarLastFM(albumQuery);
    const tasteDiveRecommendations = await getSimilarTasteDive(albumQuery); // now returns album data

    // Combine results and filter out duplicates by album title
    const allRecommendations = [
      ...spotifyRecommendations,
      ...lastFMRecommendations,
      ...tasteDiveRecommendations,
    ];
    const uniqueRecommendations = allRecommendations.filter(
      (album, index, self) =>
        index === self.findIndex((a) => a.title === album.title)
    );

    res.status(200).json(uniqueRecommendations);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    res.status(500).json({ error: "Failed to fetch recommendations" });
  }
});

module.exports = router;

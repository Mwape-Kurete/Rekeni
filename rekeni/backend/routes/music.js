const express = require("express");
const { getRecommendations } = require("../services/lastfm");
const { getSimilarMusic } = require("../services/tastedive");
const { searchiTunes } = require("../services/itunes");
const router = express.Router();

// Fetch recommendations from Last.fm
router.get("/recommendations/:username", async (req, res) => {
  const username = req.params.username;
  const recommendations = await getRecommendations(username);
  res.json(recommendations);
});

// Fetch similar music from TasteDive
router.get("/similar/:query", async (req, res) => {
  const query = req.params.query;
  const similarMusic = await getSimilarMusic(query);
  res.json(similarMusic);
});

// Search for music on iTunes
router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const searchResults = await searchiTunes(query);
  res.json(searchResults);
});

module.exports = router;

const axios = require("axios");
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_CLIENT_SECRET = process.env.LASTFM_CLIENT_SECRET;

const getRecommendations = async (username) => {
  try {
    const response = await axios.get(`http://ws.audioscrobbler.com/2.0/`, {
      params: {
        method: "user.getRecommendedAlbums",
        user: username,
        api_key: LASTFM_API_KEY,
        api_secret: LASTFM_CLIENT_SECRET, // Securely use client secret
        format: "json",
      },
    });
    return response.data.recommendations.albums.album;
  } catch (error) {
    console.error("Error fetching recommendations from Last.fm:", error);
    return [];
  }
};

module.exports = { getRecommendations };

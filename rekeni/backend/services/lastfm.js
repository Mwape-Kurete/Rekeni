const axios = require("axios");
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_CLIENT_SECRET = process.env.LASTFM_CLIENT_SECRET;

// Function to get similar artists from Last.fm based on a favorite artist
const getSimilarArtists = async (artistName) => {
  try {
    const response = await axios.get("http://ws.audioscrobbler.com/2.0/", {
      params: {
        method: "artist.getSimilar",
        artist: artistName,
        api_key: LASTFM_API_KEY,
        format: "json",
      },
    });

    return response.data.similarartists.artist;
  } catch (error) {
    console.error("Error fetching similar artists from Last.fm:", error);
    return [];
  }
};

module.exports = { getSimilarArtists };

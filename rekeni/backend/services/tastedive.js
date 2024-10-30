const axios = require("axios");
const TASTEDIVE_API_KEY = process.env.TASTEDIVE_API_KEY;

const getSimilarMusic = async (albumQuery) => {
  try {
    const response = await axios.get("https://tastedive.com/api/similar", {
      params: {
        q: albumQuery,
        type: "music",
        k: TASTEDIVE_API_KEY,
      },
    });

    // Extract only the names of similar artists
    const artistNames = response.data.similar.results.map(
      (result) => result.name
    );
    return artistNames;
  } catch (error) {
    console.error("Error fetching similar music from TasteDive:", error);
    return [];
  }
};

module.exports = { getSimilarMusic };

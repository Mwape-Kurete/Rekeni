const axios = require("axios");
const TASTEDIVE_API_KEY = process.env.TASTEDIVE_API_KEY;

const getSimilarMusic = async (query) => {
  try {
    const response = await axios.get("https://tastedive.com/api/similar", {
      params: {
        q: query,
        type: "music",
        k: TASTEDIVE_API_KEY,
      },
    });
    return response.data.Similar.Results;
  } catch (error) {
    console.error("Error fetching similar music from TasteDive:", error);
    return [];
  }
};

module.exports = { getSimilarMusic };

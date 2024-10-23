const axios = require("axios");

const searchiTunes = async (query) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/search`, {
      params: {
        term: query,
        media: "music",
        limit: 5,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching iTunes:", error);
    return [];
  }
};

module.exports = { searchiTunes };

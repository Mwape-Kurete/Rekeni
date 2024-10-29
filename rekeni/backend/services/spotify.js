const axios = require("axios");
const { getSpotifyAccessToken } = require("../oauth");

const searchSpotifyAlbums = async (albumQuery) => {
  const accessToken = await getSpotifyAccessToken();
  console.log("Spotify Access Token", accessToken);

  try {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: albumQuery,
        type: "album",
      },
    });
    return response.data.albums.items;
  } catch (error) {
    console.error(
      "Error searching Spotify albums:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to search Spotify albums");
  }
};

module.exports = { searchSpotifyAlbums };

const axios = require("axios");

const getSpotifyAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }).toString(),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              process.env.SPOTIFY_CLIENT_ID +
                ":" +
                process.env.SPOTIFY_CLIENT_SECRET
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error);
    throw new Error("Failed to fetch Spotify access token");
  }
};

getSpotifyAccessToken()
  .then((token) => console.log("Token:", token))
  .catch(console.error);

module.exports = { getSpotifyAccessToken };

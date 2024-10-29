const axios = require("axios");
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";

// Function to get similar artists from Last.fm based on a favorite artist
const getSimilarArtists = async (artistName) => {
  try {
    const response = await axios.get(BASE_URL, {
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

//Function search for albums
const getSearchedAlbum = async (albumTitle) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        method: "album.search",
        album: albumTitle,
        api_key: LASTFM_API_KEY,
        format: "json",
      },
    });

    //return a list of the albums from the search
    return response.data.results.albummatches.album;
  } catch (error) {
    console.error("Error fetching albums from Last.fm:", error);
    return [];
  }
};

module.exports = { getSimilarArtists, getSearchedAlbum };

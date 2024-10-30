const { searchSpotifyAlbums } = require("./spotify"); // Ensure correct path
const { getAlbumsByArtist, getSearchedAlbum } = require("./lastfm");
const { getSimilarMusic } = require("./tastedive");

// Define functions
const getSimilarSpotify = async (albumQuery) => {
  return await searchSpotifyAlbums(albumQuery);
};

const getSimilarLastFM = async (albumQuery) => {
  return await getSearchedAlbum(albumQuery);
};

const getSimilarTasteDive = async (albumQuery) => {
  const artistNames = await getSimilarMusic(albumQuery);
  const albumRecommendations = [];
  for (const artistName of artistNames) {
    const spotifyAlbums = await searchSpotifyAlbums(artistName);
    const lastFMAlbums = await getAlbumsByArtist(artistName);
    albumRecommendations.push(...spotifyAlbums, ...lastFMAlbums);
  }
  return albumRecommendations;
};

// Export the functions
module.exports = {
  getSimilarSpotify,
  getSimilarLastFM,
  getSimilarTasteDive,
};

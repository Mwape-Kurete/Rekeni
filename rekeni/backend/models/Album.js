const mongoose = require("mongoose");

// Album Schema
const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String },
  releaseDate: { type: String },
  artworkUrl: { type: String },
  lastfmId: { type: String }, // Store iTunes album ID for easy lookup
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // Link reviews to albums
});

module.exports = mongoose.model("Album", albumSchema);

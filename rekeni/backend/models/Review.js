const mongoose = require("mongoose");

// Review Schema
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album", required: true },
  content: {
    type: String,
    required: [true, "Review content is required"],
    minlength: [10, "Review content must be at least 10 characters long"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [1, "Rating must be at least 1"],
    max: [5, "Rating cannot exceed 5"],
  },
});

module.exports = mongoose.model("Review", reviewSchema);

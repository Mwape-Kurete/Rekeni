const express = require("express");
const Review = require("../models/Review");
const router = express.Router();
const mongoose = require("mongoose");

//Route to create reviews
router.post("/", async (req, res) => {
  const { albumId, userId, content, rating } = req.body;

  // Validation check this will ensure albumId, userId, content, and rating are provided
  if (!albumId || !userId || !content || !rating) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    console.log("Creating a new review...");

    const newReview = await Review.create({
      album: albumId,
      user: userId,
      content,
      rating,
    });

    console.log("Review created Successfully: ", newReview);

    res.status(201).json(newReview);
  } catch (error) {
    console.error("Failed to create review: ", error);

    res
      .status(500)
      .json({ error: "Failed to create review", details: error.message });
  }
});

// Route to get all reviews (descending by likes)
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("album", "title artworkUrl") // Populate album with its title and artwork
      .populate("user", "username") // Populate user with their username
      .sort({ likes: -1 }); // Sort by likes in descending order

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", details: error.message });
  }
});

// Route to get top reviews by like count
router.get("/top-reviews", async (req, res) => {
  try {
    const topReviews = await Review.find()
      .populate("user", "username")
      .populate("album", "title artist artworkUrl") // Ensure album details are populated
      .sort({ likes: -1 })
      .limit(10);

    if (!topReviews || topReviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }

    res.status(200).json(topReviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch top reviews", details: error.message });
  }
});

// Route to get all reviews by a specific user
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate that the userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    // Find all reviews where the user field matches the userId
    const userReviews = await Review.find({ user: userId })
      .populate("album", "title artist artworkUrl") // Populate album with relevant fields
      .populate("user", "username"); // Populate user with their username

    if (!userReviews || userReviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this user" });
    }

    res.status(200).json(userReviews);
  } catch (error) {
    console.error("Failed to fetch user reviews: ", error);
    res.status(500).json({
      error: "Failed to fetch user reviews",
      details: error.message,
    });
  }
});

// Route to get all reviews for an album
router.get("/:albumId", async (req, res) => {
  const { albumId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    return res.status(400).json({ error: "Invalid album ID format" });
  }

  try {
    const reviews = await Review.find({ album: albumId }).populate(
      "user",
      "username"
    ); // Populate user field to show who wrote the review

    if (!reviews || reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this album" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch reviews", details: error.message });
  }
});

// Route to get a user's unique review for an album
router.get("/:albumId/:userId", async (req, res) => {
  const { albumId, userId } = req.params;

  try {
    const review = await Review.findOne({
      album: albumId,
      user: userId,
    }).populate("user", "username");
    if (!review) {
      return res
        .status(404)
        .json({ message: "Review not found for this user and album" });
    }
    res.status(200).json(review);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch review", details: error.message });
  }
});

const checkOwnership = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    if (review.user.toString() !== req.user._id) {
      return res.status(403).json({ error: "Unauthorized action" });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Route to update a user's review
router.put("/:reviewId", checkOwnership, async (req, res) => {
  const { reviewId } = req.params;
  const { content, rating } = req.body;

  // Validation: Ensure content and rating are provided
  if (!content || !rating) {
    return res.status(400).json({ error: "Content and rating are required" });
  }

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { content, rating },
      { new: true, runValidators: true } // Return updated document with validation
    );

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json(updatedReview);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update review", details: error.message });
  }
});

// Route to delete a user's review
router.delete("/:reviewId", checkOwnership, async (req, res) => {
  const { reviewId } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete review", details: error.message });
  }
});

// Route to like a review
router.post("/:reviewId/like", async (req, res) => {
  const { reviewId } = req.params;
  const { userId } = req.body; // Assuming userId is passed in the request body

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Check if the user has already liked the review
    if (review.likedBy.includes(userId)) {
      return res
        .status(400)
        .json({ error: "User has already liked this review" });
    }

    // Add the user ID to the likedBy array and increment the likes count
    review.likedBy.push(userId);
    review.likes += 1;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to like review", details: error.message });
  }
});

// Route to unlike a review
router.post("/:reviewId/unlike", async (req, res) => {
  const { reviewId } = req.params;
  const { userId } = req.body; // Assuming userId is passed in the request body

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    // Check if the user has not liked the review yet
    if (!review.likedBy.includes(userId)) {
      return res.status(400).json({ error: "User has not liked this review" });
    }

    // Remove the user ID from the likedBy array and decrement the likes count
    review.likedBy = review.likedBy.filter((id) => id.toString() !== userId);
    review.likes -= 1;

    await review.save();

    res.status(200).json(review);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to unlike review", details: error.message });
  }
});

module.exports = router;

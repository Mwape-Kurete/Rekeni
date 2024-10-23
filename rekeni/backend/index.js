const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//importing routes
const authRoutes = require("./routes/auth");
const favoriteRoutes = require("./routes/favourites");
const historyRoutes = require("./routes/history");
const recommendationRoutes = require("./routes/recommendations");
const reviewRoute = require("./routes/reviews");
const searchRoutes = require("./routes/search");

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS with default settings (allow all origins)
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Rekeni backend is running");
});

// connecting routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/favourites", favoriteRoutes); // Favorite album routes
app.use("/api/history", historyRoutes); // Play history routes
app.use("/api/recommendations", recommendationRoutes); // Recommendation routes
app.use("/api/review", reviewRoute); // reviews routes
app.use("/api/search", searchRoutes); // search routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

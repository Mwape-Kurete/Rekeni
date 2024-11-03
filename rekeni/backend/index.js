require("dotenv").config();

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const timeout = require("connect-timeout"); // middleware timeout import

console.log("Server is starting...");

// Importing routes
const authRoutes = require("./routes/auth");
const favoriteRoutes = require("./routes/favourites");
const historyRoutes = require("./routes/history");
const recommendationRoutes = require("./routes/recommendations");
const reviewRoute = require("./routes/reviews");
const searchRoutes = require("./routes/search");
const searchSpotifyRoute = require("./routes/searchSpotifyAlbums");
const discoverRoute = require("./routes/discover");
const newReleasesRoute = require("./routes/newReleases");
const fetchAlbumRoute = require("./routes/fetchAlbum");

dotenv.config();

const app = express();
app.use(express.json());

app.use(timeout("60s")); //60s timeout for all my routes

// Enable CORS with default settings (allow all origins)
app.use(cors());

// Add session handling middleware
app.use(
  session({
    secret: "your-secret-key", // Replace with a secure secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if you're using HTTPS
  })
);

// Middleware to add userId to req.session if present in request
app.use((req, res, next) => {
  if (req.headers["x-user-id"]) {
    req.session.userId = req.headers["x-user-id"];
  }
  next();
});

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

// Connecting routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/favourites", favoriteRoutes); // Favorite album routes
app.use("/api/history", historyRoutes); // Play history routes
app.use("/api/recommendations", recommendationRoutes); // Recommendation routes
app.use("/api/review", reviewRoute); // Reviews routes
app.use("/api/search", searchRoutes); // Search routes
app.use("/api/searchAlbums", searchSpotifyRoute); // Search Spotify routes
app.use("/api/discover", discoverRoute); // Discover new Route
app.use("/api/newReleases", newReleasesRoute); //new releases route
app.use("/api/fetchAlbum", fetchAlbumRoute); //fetch album route

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

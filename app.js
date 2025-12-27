require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Url imports
const MongoURI = process.env.URI;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// permintaan file frontend ke folder dist
const frontendPath = path.join(process.cwd(), "dist");
app.use(express.static(frontendPath));

// importing User model
const User = require("./models/UserModel");
const {
  GameBotProject,
  JapanGourmetProject,
} = require("./models/ProjectSchema");

// mongoose connection
mongoose
  .connect(MongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/api/test", (req, res) => {
  res.send("API is working!");
});

//   Url untuk fetching di frontend
app.get("/api/v2/portfolio/baim", async (req, res) => {
  try {
    const portfolioData = await User.findOne({ name: "Baim" })
      .populate("portfolio_project_list.project_ref_id")
      .lean();

    if (!portfolioData) return res.status(404).send("Portfolio data not found");

    res.json(portfolioData);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

// react router ke folder dist file index
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      // Jika index.html tidak ada, tampilkan pesan fallback
      res
        .status(404)
        .send(
          "Frontend build not found. Please ensure 'npm run build' completed successfully."
        );
    }
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// ekspor object app untu vercel
module.exports = app;

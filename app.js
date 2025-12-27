require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

// Url imports
const MongoURI = process.env.URI;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// permintaan file frontend ke folder dist
const possiblePaths = [
  path.join(__dirname, "frontend", "dist"),
  path.join(__dirname, "dist"),
  path.join(process.cwd(), "frontend", "dist"),
  path.join(process.cwd(), "dist"),
];

let frontendPath = possiblePaths[0]; // Default

for (const p of possiblePaths) {
  if (require("fs").existsSync(p)) {
    frontendPath = p;
    console.log("Ditemukan folder frontend di:", p);
    break;
  }
}

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
  const indexPath = path.join(frontendPath, "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Gagal mengirim index.html dari:", indexPath);
      res.status(404).send(`
        <h1>Frontend Tidak Ditemukan</h1>
        <p>Server mencari di: <code>${indexPath}</code></p>
        <p>Coba ganti Output Directory di Vercel menjadi <code>dist</code> saja jika <code>frontend/dist</code> gagal.</p>
      `);
    }
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// ekspor object app untu vercel
module.exports = app;

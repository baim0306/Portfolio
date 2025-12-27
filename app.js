require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
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
  path.join(process.cwd(), "dist"),
  path.join(__dirname, "dist"),
];

let frontendPath = "";

for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    frontendPath = p;
    console.log("FOLDER DIST DITEMUKAN DI ROOT:", p);
    break;
  }
}

// Jika ketemu, gunakan sebagai static folder
if (frontendPath) {
  app.use(express.static(frontendPath));
}

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
  // Jika frontendPath kosong, langsung tembak ke pesan error
  if (!frontendPath) {
    return res.status(404).send(`
      <div style="font-family: sans-serif; padding: 20px;">
        <h1>🚨 Frontend Build Tidak Ditemukan</h1>
        <p>Backend berjalan, tapi folder <b>dist</b> tidak ditemukan di root folder.</p>
        <hr>
        <p>Lokasi yang diperiksa:</p>
        <ul>${possiblePaths
          .map((p) => `<li><code>${p}</code></li>`)
          .join("")}</ul>
        <p>Pastikan folder <b>dist</b> sudah ada di root setelah proses build.</p>
      </div>
    `);
  }

  const indexPath = path.join(frontendPath, "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(404).send(`
        <div style="font-family: sans-serif; padding: 20px;">
          <h1>❌ index.html Tidak Ada</h1>
          <p>Folder ditemukan di <code>${frontendPath}</code>, tapi file <code>index.html</code> tidak ada di dalamnya.</p>
        </div>
      `);
    }
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// ekspor object app untu vercel
module.exports = app;

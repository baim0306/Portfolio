const mongoose = require("mongoose");

const JapanGourmetProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  image_url: String,
  url: String,
});

const GameBotProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  image_url: String,
  url: String,
});

module.exports = {
  JapanGourmetProject: mongoose.model(
    "JapanGourmetProject", //nama pada array of object didalam data
    JapanGourmetProjectSchema, // nama variabel schema diatas
    "JapanGourmet" // nama dari collection di database
  ),
  GameBotProject: mongoose.model(
    "GameBotProject",
    GameBotProjectSchema,
    "GameBot"
  ),
};

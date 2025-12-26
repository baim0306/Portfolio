const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: String,
  email: String,
  image_profil: String,
  portfolio_project_list: [
    {
      project_ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "portfolio_project_list.project_type",
      },
      project_type: {
        type: String,
        enum: ["JapanGourmetProject", "GameBotProject"],
        required: true,
      },
    },
  ],
  descChef: String,
  descWeb: String,
  skills: [String],
});

module.exports = mongoose.model("User", UserSchema, "users");

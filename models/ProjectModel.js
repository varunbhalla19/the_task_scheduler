const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  datefrom: String,
  dateto: String,
  sectionTasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sectionTasks",
    },
  ],
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
exports.ProjectModel = ProjectModel;

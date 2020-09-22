const mongoose = require("mongoose");

const SectionTaskSchema = new mongoose.Schema({
  name: String,
  section: String,
  parentProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  },
});
const SectionTaskModel = mongoose.model("sectionTasks", SectionTaskSchema);
exports.SectionTaskModel = SectionTaskModel;

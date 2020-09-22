const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: String,
  date: String,
  dateString: String,
  descp: String,
  pinned: Boolean,
  color: String,
});

const TaskModel = mongoose.model("tasks", TaskSchema);

exports.TaskModel = TaskModel;

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://node_mongo_project:Su4Z5vwEAKhdUke9@varunmongocluster.hjtgo.mongodb.net/taskscheduler?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const TaskSchema = new mongoose.Schema({
  task: String,
  date: String,
  dateString: String,
  descp: String,
});

const TaskModel = mongoose.model("tasks", TaskSchema);

// console.log(TaskModel)

exports.db = db;

exports.TaskModel = TaskModel;

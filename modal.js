const mongoose = require("mongoose");

const uri =
  "mongodb+srv://node_mongo_project:Su4Z5vwEAKhdUke9@varunmongocluster.hjtgo.mongodb.net/taskscheduler?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

const TaskSchema = new mongoose.Schema({
  task: String,
  date: String,
  dateString: String,
  descp: String,
  pinned: Boolean,
  // color: String,
});

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
  // color: String,
});

const SectionTaskSchema = new mongoose.Schema({
  name: String,
  section: String,
  parentProject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  },
});

const TaskModel = mongoose.model("tasks", TaskSchema);
const ProjectModel = mongoose.model("projects", ProjectSchema);
const SectionTaskModel = mongoose.model("sectionTasks", SectionTaskSchema);

// console.log(TaskModel)

exports.db = db;

exports.TaskModel = TaskModel;
exports.ProjectModel = ProjectModel;
exports.SectionTaskModel = SectionTaskModel;

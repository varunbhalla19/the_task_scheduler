const express = require("express");
const path = require("path");
const cors = require("cors");

const { TaskModel, SectionTaskModel, ProjectModel, db } = require("./modal");

const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// console.log(db, TaskModel);

db.once("open", function () {
  console.log("Connected to db");
  // console.log(TaskModel);
  app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server running on port " + port);
  });
});

app.post("/tasks", (req, res) => {
  console.log("/POST tasks got : ", req.body);

  // const task = new TaskModel({
  //   task: req.body.task,
  //   descp: req.body.descp,
  //   date: req.body.date,
  //   dateString: req.body.dateString,
  //   pinned: req.body.pinned,
  // });

  const task = new TaskModel(req.body);

  task.save().then((data) => {
    console.log("data saved is ", data);
    // console.log(data.id, data._id);

    res.status(200).send({ ...data._doc, id: data.id });
  });
});

app.get("/tasks", (req, res) => {
  console.log("/tasks");
  TaskModel.find().then((data) => {
    // console.log("data recieved", data);
    res.status(200).send(data);
  });
});

app.delete("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;

  TaskModel.findByIdAndDelete(taskId).then((data) => {
    console.log("data deleted ", data);
    res.status(200).send({
      msg: "Deleted!",
    });
  });
});

app.put("/taskspin", (req, res) => {
  const { pinnedVal, id } = req.body;
  console.log("/taskpin ", pinnedVal, id);
  TaskModel.findByIdAndUpdate(id, { pinned: !pinnedVal }, { new: true }).then(
    (data) => {
      console.log("pinned task saved ", data);
      res.status(200).send(data);
    }
  );
});

app.get("/project", (req, res) => {
  ProjectModel.find().then((projs) => {
    console.log("recieved projs "); //, projs.length);
    res.status(200).send(projs);
  });
});

app.post("/project", (req, res) => {
  const { projectName, datefrom, dateto } = req.body;

  console.log("POST/project ", projectName, datefrom, dateto);

  const project = new ProjectModel({ name: projectName, datefrom, dateto });
  project.save().then((data) => {
    console.log("project saved! "); //, project);
    res.status(200).send(project);
  });
});

app.post("/secTask", (req, res) => {
  console.log(req.body);
  const { secTask, projId } = req.body;
  const secT = new SectionTaskModel({
    ...secTask,
    parentProject: mongoose.Types.ObjectId(projId),
  });
  secT.save().then((doc) => {
    console.log("secTask saved "); //, doc);
    ProjectModel.findById(projId).then((proj) => {
      console.log("corresponding project "); //, proj);
      proj.sectionTasks.push(doc.id);
      proj.save().then((data) => {
        console.log("sab saved");
        res.status(200).send({ msg: "Got it", doc });
      });
    });
  });
});

app.get("/secTask/:projId", (req, res) => {
  const { projId } = req.params;
  ProjectModel.findById(projId)
    .populate("sectionTasks")
    .then((data) => {
      res.send(data);
    });
});

app.put("/secTask", (req, res) => {
  const { id, section } = req.body;

  SectionTaskModel.findByIdAndUpdate(id, { section: section }).then((data) => {
    console.log("section saved "); //, data);
    res.status(200).send(data);
  });
});

app.delete("/secTask", (req, res) => {
  const { id } = req.body;

  SectionTaskModel.findByIdAndDelete(id).then((data) => {
    console.log("sectionTask deleted "); //, data);
    ProjectModel.findById(data.parentProject).then((proj) => {
      proj.sectionTasks.pull(id);
      proj.save().then((daaat) => {
        // console.log("sab saved ", daaat.sectionTasks);
        res.status(200).send(data);
      });
    });
  });
});

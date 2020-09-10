const express = require("express");
const path = require("path");
const cors = require("cors");

const { TaskModel, db } = require("./modal");

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

const initProj = [
  {
    projectName: "Abc Xyz",
    id: "7288288",
    datefrom: new Date(2020, 8, 9),
    dateto: new Date(2020, 8, 20),
  },
];

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
  console.log(req.body);

  const task = new TaskModel({
    task: req.body.task,
    descp: req.body.descp,
    date: req.body.date,
    dateString: req.body.dateString,
  });

  task.save().then((data) => {
    console.log("data saved is ", data);
    console.log(data.id, data._id);

    res.status(200).send({ ...data._doc, id: data.id });
  });
});

app.get("/tasks", (req, res) => {
  console.log("/tasks");
  TaskModel.find().then((data) => {
    console.log("data recieved", data);
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

app.get("/project", (req, res) => res.status(200).json(initProj));

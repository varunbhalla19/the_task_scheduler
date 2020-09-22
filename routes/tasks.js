const express = require("express");

const router = express.Router();

const { TaskModel } = require("../models/TaskModel");

router.post("/", (req, res) => {
  console.log("/POST tasks got : ", req.body);

  const task = new TaskModel(req.body);

  task.save().then((data) => {
    console.log("data saved is ", data);
    // console.log(data.id, data._id);

    res.status(200).send({ ...data._doc, id: data.id });
  });
});

router.get("/", (req, res) => {
  TaskModel.find().then((data) => {
    // console.log("data recieved", data);
    res.status(200).send(data);
  });
});

router.delete("/:taskId", (req, res) => {
  const { taskId } = req.params;

  TaskModel.findByIdAndDelete(taskId).then((data) => {
    console.log("data deleted ", data);
    res.status(200).send({
      msg: "Deleted!",
    });
  });
});

router.put("/pin", (req, res) => {
  const { pinnedVal, id } = req.body;
  console.log("/tasks/pin ", pinnedVal, id);
  TaskModel.findByIdAndUpdate(id, { pinned: !pinnedVal }, { new: true }).then(
    (data) => {
      console.log("pinned task saved ", data);
      res.status(200).send(data);
    }
  );
});

exports.taskRoutes = router;

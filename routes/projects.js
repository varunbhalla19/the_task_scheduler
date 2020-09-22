const router = require("express").Router();

const { ProjectModel } = require("../models/ProjectModel");

router.get("/", (req, res) => {
  ProjectModel.find().then((projs) => {
    console.log("recieved projs "); //, projs.length);
    res.status(200).send(projs);
  });
});

router.post("/", (req, res) => {
  const { projectName, datefrom, dateto } = req.body;

  console.log("POST/project ", projectName, datefrom, dateto);

  const project = new ProjectModel({ name: projectName, datefrom, dateto });
  project.save().then((data) => {
    console.log("project saved! "); //, project);
    res.status(200).send(project);
  });
});

exports.projectRoutes = router;

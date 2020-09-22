const router = require("express").Router();

const { ProjectModel } = require("../models/ProjectModel");
const { SectionTaskModel } = require("../models/SectionTaskModel");

router.post("/", (req, res) => {
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

router.get("/:projId", (req, res) => {
  const { projId } = req.params;
  ProjectModel.findById(projId)
    .populate("sectionTasks")
    .then((data) => {
      res.send(data);
    });
});

router.put("/", (req, res) => {
  const { id, section } = req.body;

  SectionTaskModel.findByIdAndUpdate(id, { section: section }).then((data) => {
    console.log("section saved "); //, data);
    res.status(200).send(data);
  });
});

router.delete("/", (req, res) => {
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

exports.secTaskRoutes = router;

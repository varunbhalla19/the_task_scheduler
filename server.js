const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const { db } = require("./db");

const { projectRoutes } = require("./routes/projects");
const { secTaskRoutes } = require("./routes/section-tasks");
const { taskRoutes } = require("./routes/tasks");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/tasks", taskRoutes);
app.use("/project", projectRoutes);
app.use("/secTask", secTaskRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

db.once("open", function () {
  console.log("Connected to db");
  app.listen(port, (error) => {
    if (error) throw error;
    console.log("Server running on port " + port);
  });
});

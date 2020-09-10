const express = require("express");
const path = require("path");
const cors = require("cors");

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

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/project", (req, res) =>
  res.status(200).json(initProj)
);

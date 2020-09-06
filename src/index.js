import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import TaskProvider from "./Context/TaskProvider";

import ShowHideContext from "./Context/AddTaskScreen";

import ProjectProvider from "./Context/ProjectProvider";

ReactDOM.render(
  <Router>
    <TaskProvider>
      <ProjectProvider>
        <ShowHideContext>
          <App />
        </ShowHideContext>
      </ProjectProvider>
    </TaskProvider>
  </Router>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import TaskProvider from "./Context/TaskProvider";

import ShowHideContext from "./Context/AddTaskScreen";

ReactDOM.render(
  <Router>
    <TaskProvider>
      <ShowHideContext>
        <App />
      </ShowHideContext>
    </TaskProvider>
  </Router>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import ShowHideContext from "./Context/AddTaskScreen";

import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ShowHideContext>
        <App />
      </ShowHideContext>
    </Provider>
  </Router>,
  document.getElementById("root")
);

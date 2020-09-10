import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";

import { fetchTaskAc } from "./redux/action-creators/task-ac";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Showcase from "./Components/Showcase/Showcase";
import Main from "./Pages/Main/Main";
import Modal from "./Components/Modal/Modal";

function App({ fetchTasks }) {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="App">
      <Sidebar />
      <Showcase>
        <Header />
        <Main />
      </Showcase>

      <Modal />
    </div>
  );
}

export default connect(null, (dispatch) => ({
  fetchTasks: () => dispatch(fetchTaskAc()),
}))(App);

//  Sortable => https://codesandbox.io/s/practical-lehmann-lezmu?file=/src/App.js

// const colorArray = ["#f09495", "#f0ea94", "#94f0e5", "#a394f0", "#b4f094"];

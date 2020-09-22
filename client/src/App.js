import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";

import { fetchTaskAc } from "./redux/action-creators/task-ac";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Showcase from "./Components/Showcase/Showcase";
import Main from "./Pages/Main/Main";

function App({ fetchTasks, theme }) {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ddd" : "#12181b",
      }}
      className="App"
    >
      <Header />
      <Showcase>
        <Sidebar />
        <Main />
      </Showcase>
    </div>
  );
}

export default connect(
  (state) => ({ theme: state.theme }),
  (dispatch) => ({
    fetchTasks: () => dispatch(fetchTaskAc()),
  })
)(App);

//  Sortable => https://codesandbox.io/s/practical-lehmann-lezmu?file=/src/App.js

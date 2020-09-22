import React, { useState } from "react";
import { connect } from "react-redux";

import { addTaskAc } from "../../redux/action-creators/task-ac";

// import { useRouteMatch } from "react-router-dom";

import AddScreen from "./AddScreen";

const initValues = {
  task: "",
  date: "",
  dateString: new Date().toLocaleDateString("fr-CA"),
  descp: "",
  color: "transparent",
};

export const Add_Task = ({ addTask }) => {
  const [values, setValues] = useState(initValues);

  return <AddScreen values={values} setValues={setValues} addTask={addTask} />;
};

export default connect(null, (dispatch) => ({
  addTask: (task) => dispatch(addTaskAc(task)),
}))(Add_Task);

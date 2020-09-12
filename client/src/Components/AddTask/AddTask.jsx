import React, { useState } from "react";

import Input from "../Input/Input";
import { connect } from "react-redux";

import { addTaskAc } from "../../redux/action-creators/task-ac";

const initValues = {
  task: "",
  date: "",
  dateString: "",
  descp: "",
  color: "",
};
const colors = {
  "#ff9e9e": "#2e1e1e",
  "#ff9ed2": "#2f1d27",
  "#de97f2": "#332438",
  "#af97f2": "#292338",
  "#97baf2": "#212935",
  "#97e0f2": "#1c282c",
  "#97f2c6": "#253c31",
  "#97f2a1": "#233826",
  "#d2f297": "#3c442c",
  "#f1f297": "#40412a",
  "#f2da97": "#4b442f",
  "#f6d988": "#3a3422",
  "#f6b888": "#473629",
  "#f68888": "#412525",
};

const styles = {
  width: "24px",
  height: "24px",
  margin: "0.25rem",
  display: "inline-block",
};

const AddTask = ({ addTask }) => {
  const [values, setValues] = useState(initValues);

  const [color, setColor] = useState("transparent");

  const changeInp = (name, value) => setValues({ ...values, [name]: value });

  // const resetform = () => setValues({ ...initValues });

  // console.log("Add Task", values);

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          values["dateString"] = values.date.toDateString();
          addTask({ ...values, pinned: false, color: color });
          // resetform();
        }}
      >
        <Input
          name="task"
          value={values.task}
          placeholder="Add Task..."
          inpValue={changeInp}
        />
        <Input
          name="descp"
          value={values.descp}
          placeholder="Add Description (Optional)..."
          inpValue={changeInp}
        />
        <Input
          name="date"
          type="date"
          inpValue={(name, value) => {
            changeInp(name, new Date(value.split("-").join("/")));
          }}
        />
        <div>
          <div> Choose Color (Optional) </div>
          {Object.keys(colors).map((col) => (
            <div
              key={col}
              onClick={(ev) => setColor(col)}
              style={{
                ...styles,
                background: col,
                border: col === color ? "1px solid black" : "none",
              }}
            ></div>
          ))}
          <div
            onClick={(ev) => setColor("transparent")}
            style={{
              ...styles,
              background: "transparent",
              border: "1px solid black",
            }}
          ></div>
        </div>
        <button type="submit"> Add Task </button>
      </form>
    </>
  );
};

export default connect(null, (dispatch) => ({
  // addTask: (task) => dispatch({ type: "ADD_TASK", payload: task }),
  addTask: (task) => dispatch(addTaskAc(task)),
}))(AddTask);

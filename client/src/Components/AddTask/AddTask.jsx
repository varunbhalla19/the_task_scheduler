import React, { useState } from "react";

import Input from "../Input/Input";
import { connect } from "react-redux";

const initValues = {
  task: "",
  date: "",
  dateString: "",
  descp: "",
};

const AddTask = ({ addTask }) => {
  const [values, setValues] = useState(initValues);

  const changeInp = (name, value) => setValues({ ...values, [name]: value });

  // const resetform = () => setValues({ ...initValues });

  console.log("Add Task", values);

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          values["dateString"] = values.date.toDateString();
          addTask({ ...values, id: String(Date.now()) });
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
        <button type="submit"> Add Task </button>
      </form>
    </>
  );
};

export default connect(null, (dispatch) => ({
  addTask: (task) => dispatch({ type: "ADD_TASK", payload: task }),
}))(AddTask);

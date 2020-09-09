import React, { useState } from "react";

// import styled from "styled-components";

import Input from "../Input/Input";
import { connect } from "react-redux";

// import { TaskContext } from "../../Context/TaskProvider";

const AddTask = ({ addTask }) => {
  const [values, setValues] = useState({
    task: "",
    date: null,
    dateString: "",
  });

  const changeInp = (name, value) => setValues({ ...values, [name]: value });

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          values["dateString"] = values.date.toDateString();
          console.log(values);
          addTask({ ...values, id: String(Date.now()) });
        }}
      >
        <Input
          name="task"
          value={values.task}
          placeholder="Add Task..."
          inpValue={changeInp}
        />
        <Input
          name="date"
          value={values.date}
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

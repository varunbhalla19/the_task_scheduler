import React, { useState, useContext } from "react";

// import styled from "styled-components";

import Input from "../Input/Input";

import { TaskContext } from "../../Context/TaskProvider";


export default () => {
  const [values, setValues] = useState({
    task: "",
    date: null,
    dateString: "",
  });

  const { addTask } = useContext(TaskContext);

  const changeInp = (name, value) => setValues({ ...values, [name]: value });

  return (
    <>
      {/* <Modal> */}
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          values["dateString"] = values.date.toDateString();
          // console.log(values);
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
            // console.log("value recieved ", value, typeof value);
            changeInp(name, new Date(value.split("-").join("/")));
          }}
        />

        <button type="submit"> Add Task </button>
      </form>
      {/* </Modal> */}
    </>
  );
};

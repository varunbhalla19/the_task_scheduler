import React, { useState, useContext } from "react";

import styled from "styled-components";

import Input from "../Input/Input";

import { TaskContext } from '../../Context/TaskProvider';

import { ShowHideContext } from '../../Context/AddTaskScreen';

const Cover = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.hidden ? "none" : "block")}};
`;
const TaskContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #cde;
  width: 600px;
  height: 400px;
  border-radius: 2rem;
  display: ${(props) => (props.hidden ? "none" : "block")}};
`;

export default () => {
  const [values, setValues] = useState({
    task: "",
    date: null,
    dateString : ""
  });

  const {addTask} = useContext(TaskContext)

  const { hidden, hide } = useContext(ShowHideContext);

  const changeInp = (name, value) => setValues({ ...values, [name]: value });



  return (
    <>
      <Cover onClick={hide} hidden={hidden} />
      <TaskContainer hidden={hidden}>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            values["dateString"] = values.date.toDateString()
            // console.log(values);
            addTask({...values , id : String(Date.now()) })
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
            inpValue={(name, value) => changeInp(name, new Date(value))}
          />

          <button type="submit"> Add Task </button>
        </form>
      </TaskContainer>
    </>
  );
};

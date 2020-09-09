import React, { useContext } from "react";
import styled from "styled-components";

// import ModalHoc from "../Modal/ModalHoc";

import { ShowHideContext } from "../../Context/AddTaskScreen";
import { Link } from "react-router-dom";

const TaskContainer = styled.div`
  padding: 1rem 2rem;
  background: #333;
  color: #ddd;
  margin: 0.5rem 0;
  text-align: left;
  cursor: pointer;
  // width : 100% ;
`;
const DateString = styled.p`
  color: #aaa;
  font-size: 10px;
`;

const TaskModal = ({ task }) => (
  <div
    style={{
      height: "100%",
      background: "whitesmoke",
      color: "#444",
      borderRadius: "2rem",
    }}
  >
    {task.task}
    {task.isProject ? <Link to={`/groups/${task.link}`}> Visit </Link> : null}
  </div>
);

export default ({ task }) => {
  const { setComponent } = useContext(ShowHideContext);

  // console.log("TASK IS ", task);

  return (
    <>
      <TaskContainer onClick={() => setComponent(<TaskModal task={task} />)}>
        <p> {task.task} </p>
        <DateString>{task.dateString}</DateString>
      </TaskContainer>
    </>
  );
};

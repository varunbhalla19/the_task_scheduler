import React, { useContext } from "react";
import styled from "styled-components";

// import ModalHoc from "../Modal/ModalHoc";

import { ShowHideContext } from "../../Context/AddTaskScreen";

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

const TaskModal = ({ text }) => (
  <div
    style={{
      height: "100%",
      background: "whitesmoke",
      color: "#444",
      borderRadius: "2rem",
    }}
  >
    {text}
  </div>
);

export default ({ task, dateString }) => {
  const { setComponent } = useContext(ShowHideContext);

  return (
    <>
      <TaskContainer onClick={() => setComponent(<TaskModal text={task} />)}>
        <p> {task} </p>
        <DateString>{dateString}</DateString>
      </TaskContainer>
    </>
  );
};

import React from "react";

import Task from "../../Components/Task/Task";
import { connect } from "react-redux";

// import { ReactComponent as NoWork } from "../../Assets/Svgs/nowork.svg";

import styled from "styled-components";

const Cover = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TaskS = styled.div`
  flex-grow: 1;
  // background: darkslateblue;
  width: 80%;
  margin: auto;
  padding: 1rem;
  height: 0px;
  overflow: auto;
`;

const TaskSheet = ({ weekDay, taskList }) => {
  console.log("TaskSheet Component");

  return (
    <Cover>
      <h4 style={{ textAlign: "left" }}> {weekDay} </h4>
      {
        <TaskS>
          {taskList.map((task) => (
            <Task task={task} key={task._id} todayShow dateString={weekDay} />
          ))}
        </TaskS>
      }
    </Cover>
  );
};

export default connect(({ weekDay, tasks }) => ({
  weekDay,
  taskList: tasks[weekDay] ? tasks[weekDay].taskList : [],
}))(TaskSheet);

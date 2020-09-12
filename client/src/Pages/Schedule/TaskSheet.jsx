import React from "react";

import Task from "../../Components/Task/Task";
import { connect } from "react-redux";

// import { ReactComponent as NoWork } from "../../Assets/Svgs/nowork.svg";

import styled from "styled-components";

const Cover = styled.div`
  padding: 1rem 1.5rem;
  flex-grow: 1;
  // height : 10px;
  // background : slateblue;
  display : flex;
  flex-direction : column;

`;

const TaskS = styled.div`
  flex-grow: 1;
  // background: darkslateblue;
  width: 100%;
  margin: auto;
  padding: 1rem;
  height: 0px;
  overflow: auto;
  div {
    width: 100%;
  }
`;

const TaskSheet = ({ weekDay, taskList }) => {
  console.log("TaskSheet Component");

  return (
    <Cover>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h4>{weekDay}</h4>
        <h4> {weekDay === new Date().toDateString() ? "Today" : null} </h4>
        <div style={{ width: "60px" }}></div>
      </div>
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

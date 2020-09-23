import React from "react";

import Task from "../../Components/Task/Task";

import { Container, TaskContainer } from "./styles";
import { connect } from "react-redux";

Date.getToday = new Date().toDateString();

const Today = ({ todayTask }) => {
  console.log("TODAY RENDERED");

  return (
    <Container>
      <TaskContainer>
        {todayTask.map((task, index) => (
          <Task key={task._id} index={index} todayShow task={task} />
        ))}
      </TaskContainer>
    </Container>
  );
};
export default connect((state) => ({
  todayTask: state.tasks[Date.getToday]
    ? state.tasks[Date.getToday].taskList
    : [],
}))(Today);

import React from "react";

import Task from "../../Components/Task/Task";

import { Container, Title, TaskContainer } from "./styles";
import { connect } from "react-redux";

Date.getToday = new Date().toDateString();

const Today = ({ todayTask }) => {
  // const { todayTask } = useContext(TaskContext);

  console.log("Today Component");

  return (
    <Container>
      <Title>Today </Title>
      <TaskContainer>
        {todayTask.map((task) => (
          <Task key={task.id} todayShow task={task} />
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

import React from "react";

import Task from "../../Components/Task/Task";

import { Container, TaskContainer } from "./styles";
import { connect } from "react-redux";

import { finalOverdue } from "../../redux/selectors/upcoming";

Date.getToday = new Date().toDateString();

const Overdue = ({ overdue }) => {
  console.log("OVERDUE RENDERED");

  return (
    <Container>
      <TaskContainer>
        {overdue.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default connect((state) => ({
  overdue: finalOverdue(state.tasks),
}))(Overdue);

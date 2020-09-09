import React from "react";
import { connect } from "react-redux";

import Task from "../../Components/Task/Task";

import { Container, Title, TaskContainer } from "./styles";


const UpComing = ({ upComingTasks }) => {
  console.log("Upcoming Tasks ", upComingTasks);

  return (
    <Container>
      <Title>Upcoming</Title>
      <TaskContainer>
        {upComingTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default connect(({ tasks }) => ({
  upComingTasks: Object.values(tasks)
    .filter(({ date, taskList }) => date > new Date())
    .sort((t1, t2) => (t1.date < t2.date ? -1 : 1))
    .reduce((ar, taskObj) => [...ar, ...taskObj.taskList], []),
}))(UpComing);


import React, { useContext } from "react";

// import styled from "styled-components";

import { TaskContext } from "../../Context/TaskProvider";

import Task from "../../Components/Task/Task";

import { Container, Title, TaskContainer } from "./styles";

export default () => {
  const { todayTask } = useContext(TaskContext);

  return (
    <Container>
      <Title>Today {console.log("Today Component")} </Title>
      <TaskContainer>
        {todayTask().map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </TaskContainer>
    </Container>
  );
};

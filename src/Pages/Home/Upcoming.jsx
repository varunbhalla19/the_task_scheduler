import React, { useContext } from "react";

import styled from "styled-components";

import { TaskContext } from "../../Context/TaskProvider";

import Task from "../../Components/Task/Task";

import { Container, Title, TaskContainer } from "./styles";

export default () => {
  const { upComingTask } = useContext(TaskContext);

  let TaskArray = upComingTask();

  let sortedTaskArray = TaskArray.sort((t1, t2) =>
    t1.date < t2.date ? -1 : 1
  );

  const finalTaskList = sortedTaskArray.reduce(
    (ar, taskObj) => [...ar, ...taskObj.taskList],
    []
  );

  //   console.log("Upcoming Task Array ", finalTaskList);

  return (
    <Container>
      <Title>Upcoming</Title>
      <TaskContainer>
        {finalTaskList.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </TaskContainer>
    </Container>
  );
};

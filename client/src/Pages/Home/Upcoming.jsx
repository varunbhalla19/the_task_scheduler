import React from "react";
import { connect } from "react-redux";

import Task from "../../Components/Task/Task";

import { Container, TaskContainer } from "./styles";

import { finalUpcoming } from "../../redux/selectors/upcoming";

const UpComing = ({ upComingTasks }) => {
  // console.log("Upcoming Tasks ", upComingTasks);

  console.log("UPCOMING RENDERED");

  return (
    <Container>
      <TaskContainer>
        {upComingTasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </TaskContainer>
    </Container>
  );
};

export default connect((state) => ({
  upComingTasks: finalUpcoming(state.tasks),
}))(UpComing);

import React from "react";
import { connect } from "react-redux";

import Task from "../../Components/Task/Task";

import styled from "styled-components";

const Cover = styled.div`
  padding: "1rem";
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const TaskCover = styled.div`
  flex-grow: 1;
  height: 0;
  overflow: auto;
  div {
    width: 95%;
  }
`;

const WeeklyPinned = ({ week, tasks }) => {
  let pts = week.reduce(
    (ac, date) =>
      tasks[date.toDateString()]
        ? [
            ...ac,

            ...tasks[date.toDateString()].taskList.filter(
              (task) => task.pinned
            ),
          ]
        : ac,

    []
  );

  console.log(pts);

  return (
    <Cover style={{ padding: "1rem" }}>
      <h3> WeeklyPinned </h3>
      <TaskCover>
        {pts.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </TaskCover>
    </Cover>
  );
};

export default connect((state) => ({
  week: state.week,
  tasks: state.tasks,
  //   pinnedTasks: state.week.reduce((ar, date) => {
  //     return [
  //       ...ar,
  //       state[date.toDateString()].taskList.filter((task) => task.pinned),
  //     ];
  //   }, []),
}))(WeeklyPinned);

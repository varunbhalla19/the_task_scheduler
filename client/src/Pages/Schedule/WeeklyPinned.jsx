import React from "react";

import Task from "../../Components/Task/Task";

import styled from "styled-components";

const Cover = styled.div`
  // padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  // width: 95%;
`;
const TaskCover = styled.div`
  flex-grow: 1;
  height: 0;
  overflow: auto;
  width: 100%;
  div {
    // width: 95%;
  }
`;

const WeeklyPinned = ({ weeklyPinned }) => {
  return (
    <Cover>
      <TaskCover>
        {weeklyPinned.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </TaskCover>
    </Cover>
  );
};

export default WeeklyPinned;

// week: state.week,
// tasks: state.tasks,
//   pinnedTasks: state.week.reduce((ar, date) => {
//     return [
//       ...ar,
//       state[date.toDateString()].taskList.filter((task) => task.pinned),
//     ];
//   }, []),

// let pts = week.reduce(
//   (ac, date) =>
//     tasks[date.toDateString()]
//       ? [
//           ...ac,
//           ...tasks[date.toDateString()].taskList.filter(
//             (task) => task.pinned
//           ),
//         ]
//       : ac,
//   []
// );

// console.log(pts);

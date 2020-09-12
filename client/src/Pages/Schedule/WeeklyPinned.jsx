import React from "react";
import { connect } from "react-redux";

import Task from "../../Components/Task/Task";

import styled from "styled-components";

import { WeeklyPinnedTasksSelector } from '../../redux/selectors/weekly-pinned'

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

const WeeklyPinned = ({ weeklyPinned }) => {
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

  return (
    <div style={{ width: "40%", display: !weeklyPinned.length ? "none" : "block" }}>
      <Cover style={{ padding: "1rem" }}>
        <h3>
          Weekly Pinned : <span> {weeklyPinned.length} </span>
        </h3>
        <TaskCover>
          {weeklyPinned.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </TaskCover>
      </Cover>
    </div>
  );
};

export default connect((state) => ({
  
  weeklyPinned : WeeklyPinnedTasksSelector(state)
  // week: state.week,
  // tasks: state.tasks,
  //   pinnedTasks: state.week.reduce((ar, date) => {
  //     return [
  //       ...ar,
  //       state[date.toDateString()].taskList.filter((task) => task.pinned),
  //     ];
  //   }, []),
}))(WeeklyPinned);

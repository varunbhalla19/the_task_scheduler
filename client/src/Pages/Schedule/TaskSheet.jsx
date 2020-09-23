import React, { useState } from "react";

import Task from "../../Components/Task/Task";
import { connect } from "react-redux";

// import { ReactComponent as NoWork } from "../../Assets/Svgs/nowork.svg";

import { WeeklyPinnedTasksSelector } from "../../redux/selectors/weekly-pinned";

import WeeklyPinned from "./WeeklyPinned";

import styled from "styled-components";

const Cover = styled.div`
  padding: 1rem 1.5rem;
  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 450px) {
    padding: 1.5rem 0.2rem;
  }

  flex-grow: 1;
  // height : 10px;
  // background : slateblue;
  display: flex;
  flex-direction: column;
`;

const TaskS = styled.div`
  flex-grow: 1;
  width: 100%;
  margin: 0.5rem auto 0;
  padding: 0.4rem 1rem;
  height: 0px;
  overflow: auto;

  @media (max-width: 450px) {
    padding: 0.4rem 0.2rem;
  }
`;

const TitleSwitch = styled.h3`
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? "1" : "0.3")};
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ComponentSwitch = ({ mode, setMode, weekDay, length }) => (
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <TitleSwitch onClick={(ev) => setMode("T")} selected={mode === "T"}>
      {weekDay === new Date().toDateString() ? "Today" : weekDay}{" "}
      {length ? ": " + length : null}
    </TitleSwitch>

    <TitleSwitch onClick={(ev) => setMode("WP")} selected={mode === "WP"}>
      Weekly Pinned : {length}
    </TitleSwitch>
  </div>
);

const TaskSheet = ({ weekDay, taskList, weeklyPinned }) => {
  console.log("TaskSheet Component");

  const [mode, setMode] = useState("T"); // T or WP

  return (
    <Cover>
      <ComponentSwitch
        weekDay={weekDay}
        length={weeklyPinned.length}
        mode={mode}
        setMode={setMode}
        length={taskList.length}
      />

      <TaskS>
        {mode === "T" ? (
          <>
            {taskList.map((task) => (
              <Task task={task} key={task._id} todayShow dateString={weekDay} />
            ))}
          </>
        ) : (
          <WeeklyPinned weeklyPinned={weeklyPinned} />
        )}
      </TaskS>
    </Cover>
  );
};

export default connect((state) => ({
  weekDay: state.weekDay,
  taskList: state.tasks[state.weekDay]
    ? state.tasks[state.weekDay].taskList
    : [],
  weeklyPinned: WeeklyPinnedTasksSelector(state),
}))(TaskSheet);

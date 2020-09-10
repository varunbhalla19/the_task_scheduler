import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

const WeekName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 12px;
`;

const colorArray = [
  "#e6ee9c",
  "#aed581",
  "#81d4fa",
  "#b39ddb",
  "#f48fb1",
  "#ef9a9a",
  "#a1887f",
  "#90a4ae",
];

const getColor = () =>
  colorArray[Math.floor(Math.random() * colorArray.length)];

const Day = styled.div`
  cursor: pointer;
  margin: 0 0.5rem;
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;

  background: ${({ hasTasks, isToday }) =>
    isToday ? "#282c34" : hasTasks ? getColor() : "transparent"};
`;

const DateP = styled.h4`
  color: black;
`;

const WeekDay = ({ day, hasTasks, setWeekDay }) => {
  return (
    <Day
      isToday={day.isToday}
      style={{
        color: `${day.isToday ? "#ddd" : "black"}`,
      }}
      hasTasks={hasTasks}
      onClick={() => setWeekDay(day.toDateString())}
    >
      <WeekName>
        {day.toLocaleDateString(undefined, { weekday: "short" })}
      </WeekName>
      <DateP
        isToday={day.isToday}
        hasTasks={hasTasks}
        style={{
          color: `${day.isToday ? "#ddd" : "black"}`,
        }}
      >
        {day.getDate()}
      </DateP>
    </Day>
  );
};

export default connect(
  ({ tasks }, { day }) => ({
    hasTasks: tasks[day.toDateString()]
      ? tasks[day.toDateString()].taskList.length === 0
        ? false
        : true
      : false,
  }),
  (dispatch) => ({
    setWeekDay: (dayStr) => dispatch({ type: "SET_WDAY", payload: dayStr }),
  })
)(WeekDay);

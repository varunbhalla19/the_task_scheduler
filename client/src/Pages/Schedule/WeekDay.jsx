import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

const WeekName = styled.h6`
  margin-bottom: 0.5rem;
  // font-size: 12px;
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // border-radius: 50%;
`;

const DateP = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  // border: 1px solid black;
  background: ${({ hasTasks, isToday }) =>
    isToday ? "#282c34" : hasTasks ? getColor() : "transparent"};
`;

const DateH = styled.h5`
  color: black;
`;

const WeekDay = ({ day, hasTasks, setWeekDay }) => {
  return (
    <Day isToday={day.isToday} onClick={() => setWeekDay(day.toDateString())}>
      <WeekName>
        {day.toLocaleDateString(undefined, { weekday: "short" })}
      </WeekName>
      <DateP isToday={day.isToday} hasTasks={hasTasks} isToday={day.isToday}>
        <DateH
          style={{
            color: `${day.isToday ? "#ddd" : "black"}`,
          }}
        >
          {day.getDate()}
        </DateH>
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

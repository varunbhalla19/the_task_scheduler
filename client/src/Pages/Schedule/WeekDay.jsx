import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

const WeekName = styled.h6`
  margin-bottom: 0.5rem;
  // font-size: 12px;
`;

const colorArray = [
  "#e53935",
  "#8e24aa",
  "#3f51b5",
  "#009688",
  "#4caf50",
  "#cddc39",
  "#ffa000",
  "#ef6c00",
  "#ff5722",
  "#0091ea",
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
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  // border: 1px solid black;
  border: 3px solid
    ${({ hasTasks, isToday, index }) =>
      isToday ? "transparent" : hasTasks ? colorArray[index] : "transparent"};
  background: ${({ isToday, theme }) =>
    isToday ? (theme === "dark" ? "#151c1e" : "#282c34") : "transparent"};
  ${({ isSelected }) => (isSelected ? " border : 3px solid #111;" : "")}

  @media( max-width : 450px ) {
    font-size: 12px;
    width: 28px;
    height: 28px;
  }
`;

const DateH = styled.p`
  color: black;

  // color : #828b97;
`;

const WeekDay = ({ day, hasTasks, setWeekDay, theme, weekDay, index }) => {
  // console.log('day',day)
  return (
    <Day isToday={day.isToday} onClick={() => setWeekDay(day.toDateString())}>
      <WeekName>
        {day.toLocaleDateString(undefined, { weekday: "short" })}
      </WeekName>
      <DateP
        isToday={day.isToday}
        theme={theme}
        hasTasks={hasTasks}
        isSelected={weekDay === day.toDateString()}
        index={index}
      >
        <DateH
          style={{
            color: `${
              day.isToday ? "#ddd" : theme === "light" ? "#444" : "#828b97"
            }`,
          }}
        >
          {day.getDate()}
        </DateH>
      </DateP>
    </Day>
  );
};

export default connect(
  ({ tasks, theme, weekDay }, { day }) => ({
    theme,
    weekDay,
    hasTasks: tasks[day.toDateString()]
      ? tasks[day.toDateString()].taskList.length === 0
        ? false
        : true
      : false,
    // weekDay,
  }),
  (dispatch) => ({
    setWeekDay: (dayStr) => dispatch({ type: "SET_WDAY", payload: dayStr }),
  })
)(WeekDay);

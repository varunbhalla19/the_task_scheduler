import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

const WeekName = styled.div`
  margin-bottom: 0.5rem;
`;

const Day = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.5rem;
  // width: 60px;
  flex-grow: 1;
  position: relative;
  &:hover {
    background: #eee;
  }
  div {
    position: relative;
    z-index: 2;
  }

  border: 1px solid ${({ isToday }) => (isToday ? "indianred" : "transparent")};
  color: ${({ hasTasks }) => (hasTasks ? "red" : "black")};
  `;
  // color: ${({ isToday }) => (isToday ? "#eee" : "#111")};



const WeekDay = ({ day, hasTasks, setWeekDay }) => {
  return (
    <Day
      isToday={day.isToday}
      hasTasks={hasTasks}
      onClick={() => setWeekDay(day.toDateString())}
    >
      <WeekName>
        {day.toLocaleDateString(undefined, { weekday: "short" })}
      </WeekName>
      <div>{day.getDate()}</div>
    </Day>
  );
};

export default connect(
  ({ tasks }, { day }) => ({
    hasTasks: tasks[day.toDateString()] ? true : false,
  }),
  (dispatch) => ({
    setWeekDay: (dayStr) => dispatch({ type: "SET_WDAY", payload: dayStr }),
  })
)(WeekDay);

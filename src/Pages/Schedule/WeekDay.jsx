import React, { useContext } from "react";

import styled from "styled-components";

import { WeekContext } from "./Schedule";

const WeekName = styled.div`
  margin-bottom: 0.5rem;
`;

const Day = styled.div`
  cursor: pointer;
  padding: 1rem 2rem;
  flex-grow: 1;
  &:hover {
    background: #eee;
  }

  border: 1px solid ${({ isToday }) => (isToday ? "indianred" : "transparent")};
`;

export default ({ day }) => {
  const { setWeekDay } = useContext(WeekContext);
  return (
    <Day
      isToday={day.isToday}
      onClick={() => setWeekDay(day.toDateString())}
    >
      <WeekName>
        {day.toLocaleDateString(undefined, { weekday: "short" })}
      </WeekName>
      <div>{day.getDate()}</div>
    </Day>
  );
};

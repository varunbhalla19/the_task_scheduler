import React, { createContext, useState } from "react";

import styled from "styled-components";

import Weekly from "./Weekly";

import TaskSheet from "./TaskSheet";

const Title = styled.h2`
  padding: 1rem;
`;

export const WeekContext = createContext({
  weekDay: "",
  setWeekDay: () => {},
});

export default () => {
  const [wday, setWday] = useState(new Date().toDateString());
  console.log("date selected => ", wday);
  return (
    <div className="sch">
      <Title> Schedule </Title>

      <WeekContext.Provider
        value={{
          weekDay: wday,
          setWeekDay: (str) => setWday(str),
        }}
      >
        <Weekly />

        <TaskSheet />
      </WeekContext.Provider>
    </div>
  );
};

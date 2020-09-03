import React, { useState, useEffect } from "react";

import styled from "styled-components";

import WeekDay from "./WeekDay";

// import { WeekContext } from "./Schedule";

const HeadContainer = styled.div`
  padding: 0.5rem 6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Arrows = styled.span`
  margin: 0 1rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid #234;
  border-radius: 1rem;
  cursor: pointer;
`;
const Present = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px dashed #555;
  cursor: pointer;
`;

const MonthTitle = styled.h3`
  margin-right: 3rem;
`;

const WeekContainer = styled.div`
    padding 0rem 2rem ;
    display : flex ;
    align-items : center ;
    justify-content : space-around ;
`;

const Line = styled.hr`
  width: 85%;
  border: 1px solid #ccc;
  margin: 0rem auto;
`;

Date.setDateNum = (date, num) => {
  let d = new Date(date);
  d.setDate(num + date.getDate());
  if (d.toDateString() === new Date().toDateString()) {
    d.isToday = true;
  }
  return d;
};

Date.getFirstWeekSunday = () => {
  let d = new Date();
  d.setDate(1);
  let day = d.getDay();
  let res = day === 0 ? 0 : 1 - day;
  d.setDate(res);
  return d;
};

const getInitWeekDays = () => {
  console.log("initWeekDays called");
  let ar = new Array(7).fill(0);
  let fd = Date.getFirstWeekSunday();
  let newAr = ar.map((el, index) => Date.setDateNum(fd, index));
  return newAr;
};

const getNextWeek = (d) => {
  let ar = new Array(7).fill(0);
  return ar.map((el, index) => Date.setDateNum(d, index + 1));
};

const genPrevWeek = (d) => {
  let ar = new Array(7).fill(0);
  return ar.map((el, index) => Date.setDateNum(d, -1 - index)).reverse();
};

export default () => {
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    setWeekDays([...getInitWeekDays()]);
  }, []);

  const month =
    weekDays.length === 0
      ? null
      : weekDays[6].toLocaleDateString(undefined, { month: "long" });

  return (
    <div>
      <HeadContainer>
        <MonthTitle> {month} </MonthTitle>
        <Arrows onClick={(e) => setWeekDays(genPrevWeek(weekDays[0]))}>
          {"<"}
        </Arrows>
        <Present onClick={(e) => setWeekDays(getInitWeekDays())} />
        <Arrows onClick={(ev) => setWeekDays(getNextWeek(weekDays[6]))}>
          {">"}
        </Arrows>
      </HeadContainer>
      <WeekContainer>
        {weekDays.map((day) => (
          <WeekDay key={day.toLocaleDateString()} day={day} />
        ))}
      </WeekContainer>
      <Line />
    </div>
  );
};

import React from "react";

import styled from "styled-components";

import WeekDay from "./WeekDay";
import { connect } from "react-redux";

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

const Weekly = ({
  week,
  prevWeekDays,
  presentWeekDays,
  nextWeekDays,
  month,
}) => {
  return (
    <div>
      <HeadContainer>
        <MonthTitle> {month} </MonthTitle>
        <Arrows onClick={(e) => prevWeekDays(week[0])}>{"<"}</Arrows>
        <Present onClick={(e) => presentWeekDays()} />
        <Arrows onClick={(ev) => nextWeekDays(week[6])}>{">"}</Arrows>
      </HeadContainer>
      <WeekContainer>
        {week.map((day) => (
          <WeekDay key={day.toLocaleDateString()} day={day} />
        ))}
      </WeekContainer>
      <Line />
    </div>
  );
};

export default connect(
  ({ week }) => ({
    month: week[6].toLocaleDateString(undefined, { month: "long" }),
    week,
  }),
  (dispatch) => ({
    prevWeekDays: (day) => dispatch({ type: "PREV_WEEK", payload: day }),
    presentWeekDays: () => dispatch({ type: "INIT_WEEK" }),
    nextWeekDays: (day) => dispatch({ type: "NEXT_WEEK", payload: day }),
  })
)(Weekly);
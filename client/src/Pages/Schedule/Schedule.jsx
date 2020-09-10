import React from "react";

import styled from "styled-components";

import Weekly from "./Weekly";

import TaskSheet from "./TaskSheet";

const Title = styled.h2`
  padding: 1rem;
`;


export default () => {
  console.log("Schedule Component");
  return (
    <div className="sch">
      <Title> Schedule </Title>

      <Weekly />
      <TaskSheet />
    </div>
  );
};

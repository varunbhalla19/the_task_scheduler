import React from "react";

import styled from "styled-components";

// import { TaskContext } from "../../Context/TaskProvider";

import Today from "./Today";
import UpComing from "./Upcoming";

Date.isToday = (date) => date.toDateString() === new Date().toDateString();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HomeContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  background: indianred;
  flex-grow: 1;
  border-radius: 2rem;
`;

const Title = styled.h2`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

export default () => (
  <Container>
    <Title> Home </Title>

    <HomeContainer>
      <Today />
      <UpComing />
    </HomeContainer>
  </Container>
);

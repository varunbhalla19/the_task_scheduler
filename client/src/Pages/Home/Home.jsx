import React, { useState } from "react";

import styled from "styled-components";

import Today from "./Today";
import UpComing from "./Upcoming";
import Overdue from "./Overdue";

import { TitleButtons } from "./styles";

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
  // background: darkslateblue;
  flex-grow: 1;
  border-radius: 1rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const getSelectedComponent = (mode) => {
  switch (mode) {
    case "O":
      return <Overdue />;
    case "U":
      return <UpComing />;
    case "T":
      return <Today />;

    default:
      return null;
  }
};

export default () => {
  const [mode, setMode] = useState("T");

  return (
    <Container>
      <ComponentSwitch setMode={setMode} mode={mode} />

      <HomeContainer>{getSelectedComponent(mode)}</HomeContainer>

      {/* <HomeContainer>{mode === "T" ? <Today /> : <UpComing />}</HomeContainer> */}
    </Container>
  );
};

const ComponentSwitch = ({ mode, setMode }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <TitleButtons onClick={(ev) => setMode("T")} selected={mode === "T"}>
        Today
      </TitleButtons>
      <TitleButtons onClick={(ev) => setMode("O")} selected={mode === "O"}>
        Overdue
      </TitleButtons>
      <TitleButtons onClick={(ev) => setMode("U")} selected={mode === "U"}>
        Upcoming
      </TitleButtons>
    </div>
  );
};

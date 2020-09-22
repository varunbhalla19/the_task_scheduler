import React from "react";

import { Route } from "react-router-dom";

import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import Add_Task from "../AddScreen/Add_Task";

import styled from "styled-components";
import { connect } from "react-redux";

const Main = styled.div`
  flex-grow: 1;
  padding: 0.4rem 1rem;
  & > div {
    height: 100%;

    background-color: ${({ theme }) =>
      theme === "light" ? "snow" : "#171e21"};

    box-shadow: ${({ theme }) =>
      theme === "light" ? "0px 3px 10px 0px rgba(0,0,0,0.4)" : "none"};

    border-radius: 1rem;
  }
  @media (max-width: 450px) {
    padding: 0.4rem 0;
  }
`;

const MainPage = ({ theme }) => (
  <Main theme={theme}>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/add" component={Add_Task} />
    </div>
  </Main>
);

export default connect(({ theme }) => ({ theme }))(MainPage);

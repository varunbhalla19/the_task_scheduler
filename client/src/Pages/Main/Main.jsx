import React from "react";

import { Route } from "react-router-dom";

import Home from "../Home/Home";

import Schedule from "../Schedule/Schedule";
import Projects from "../Projects/Projects";

import styled from "styled-components";

const Main = styled.div`
  flex-grow: 1;
  padding: 1rem 3rem 1rem 1rem;
  // background: #789789;
  & > div {
    height: 100%;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.5);
    background: snow;
    border-radius: 2rem;
  }
`;

// const Chat = () => <h2>Chat</h2>;

// const Tasks = () => <h2>Tasks</h2>;

const Settings = () => <h2>Settings</h2>;

const MainPage = () => (
  <Main>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/groups" component={Projects} />
      <Route path="/settings" component={Settings} />
      {/* <Route path="/chat" component={Chat} /> */}
      {/* <Route path="/tasks" component={Tasks} /> */}
    </div>
  </Main>
);

export default MainPage;

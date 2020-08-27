import React from "react";

import { Route } from "react-router-dom";

import Home from "../Home/Home";

import styled from "styled-components";

const Main = styled.div`
  flex-grow: 1;
  padding: 2rem;
  // background: #789789;
  & > div {
    height: 100%;
    background: snow;
    border-radius: 2rem;
  }
`;

const Chat = () => <h2>Chat</h2>;

const Tasks = () => <h2>Tasks</h2>;
const Groups = () => <h2>Groups</h2>;
const Schedule = () => <h2>Schedule</h2>;
const Settings = () => <h2>Settings</h2>;

const MainPage = () => (
  <Main>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/groups" component={Groups} />
      <Route path="/settings" component={Settings} />
    </div>
  </Main>
);

export default MainPage;

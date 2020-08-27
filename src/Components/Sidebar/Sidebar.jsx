import React from "react";
import styled from "styled-components";

// import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeSvg } from "../../Assets/Svgs/home-24px.svg";
import { ReactComponent as TaskSvg } from "../../Assets/Svgs/task.svg";
import { ReactComponent as SettingsSvg } from "../../Assets/Svgs/settings-24px.svg";
import { ReactComponent as TextSvg } from "../../Assets/Svgs/chat-24px.svg";
import { ReactComponent as CalendarSvg } from "../../Assets/Svgs/calendar.svg";
import { ReactComponent as PeopleSvg } from "../../Assets/Svgs/people-24px.svg";

// width: 5rem;
const SideBar = styled.div`
  background-color: #eee;
  height: 100vh;
`;

const Options = styled.div`
  padding: 1rem 0;
  margin: 4rem 0.5rem 0 0;
`;

const Option = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  svg {
    height: 36px;
    width: 36px;
    * {
      pointer-events: none;
    }
  }
`;

const Nav = styled(NavLink)`
  display: block;
  margin: 1rem 0 0 0.5rem;

  &:nth-last-child(1) {
    margin-top: 7rem;
  }

  &.active > div {
    background: #282c34;
    box-shadow: 1px 2px 9px 0px rgba(0, 0, 0, 0.5);
    svg {
      fill: #cdecde;
    }
  }
`;

export default () => (
  <SideBar>
    <Options>
      <Nav exact to="/">
        <Option>
          <HomeSvg />
        </Option>
      </Nav>

      <Nav to="/tasks">
        <Option>
          <TaskSvg />
        </Option>
      </Nav>
      <Nav to="/chat">
        <Option>
          <TextSvg />
        </Option>
      </Nav>
      <Nav to="schedule">
        <Option>
          <CalendarSvg />
        </Option>
      </Nav>
      <Nav to="groups">
        <Option>
          <PeopleSvg />
        </Option>
      </Nav>
      <Nav to="settings">
        <Option>
          <SettingsSvg />
        </Option>
      </Nav>
    </Options>
  </SideBar>
);

import React from "react";
import styled from "styled-components";

// import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import { ReactComponent as HomeSvg } from "../../Assets/Svgs/home-24px.svg";
// import { ReactComponent as TaskSvg } from "../../Assets/Svgs/task.svg";
// import { ReactComponent as TextSvg } from "../../Assets/Svgs/chat-24px.svg";
import { ReactComponent as SettingsSvg } from "../../Assets/Svgs/settings-24px.svg";
import { ReactComponent as CalendarSvg } from "../../Assets/Svgs/calendar.svg";
import { ReactComponent as PeopleSvg } from "../../Assets/Svgs/people-24px.svg";
import { connect } from "react-redux";

// width: 5rem;
const SideBar = styled.div`
  background-color: ${({ theme }) => (theme === "dark" ? "#12181b" : "#ddd")};

  height: 100vh;

  & > div > a > div > h6 {
    color: ${({ theme }) => (theme === "light" ? "#333" : "#b2becd")};
  }

  & > div > a > div > svg {
    fill: ${({ theme }) => (theme === "light" ? "112233" : "#cdecde" )};
  }
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
  justify-content: space-between;
  min-width: 120px;
  svg {
    height: 28px;
    width: 28px;
    * {
      pointer-events: none;
    }
  }
`;

const Nav = styled(NavLink)`
  display: block;
  margin: 1rem 0 0 0.5rem;
  text-decoration: none;
  &:nth-last-child(1) {
    margin-top: 7rem;
  }

  &.active > div {
    background: #282c34;
    box-shadow: 1px 2px 9px 0px rgba(0, 0, 0, 0.5);
    svg {
      fill: #cdecde;
    }
    h6 {
      color: whitesmoke;
    }
  }
`;

const NavName = styled.h6`
  text-decoration: none;
`;

const SideBarComponent = ({ theme }) => (
  <SideBar theme={theme}>
    <Options theme={theme}>
      <Nav exact to="/">
        <Option>
          <NavName> Home </NavName> <HomeSvg />
        </Option>
      </Nav>

      <Nav to="/schedule">
        <Option>
          <NavName> Schedule </NavName> <CalendarSvg />
        </Option>
      </Nav>
      <Nav to="/groups">
        <Option>
          <NavName> Projects </NavName> <PeopleSvg />
        </Option>
      </Nav>
      <Nav to="/settings">
        <Option>
          <NavName> Settings </NavName> <SettingsSvg />
        </Option>
      </Nav>
    </Options>
  </SideBar>
);

export default connect(({ theme }) => ({ theme }))(SideBarComponent);

/* <Nav to="/tasks">
        <Option>
          <NavName> Tasks </NavName> <TaskSvg />
        </Option>
      </Nav> */

/* <Nav to="/chat">
        <Option>
          <NavName> Chat </NavName> <TextSvg />
        </Option>
      </Nav> */

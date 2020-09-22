import React from "react";
import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

import { ReactComponent as HomeSvg } from "../../Assets/Svgs/home-24px.svg";
import { ReactComponent as CalendarSvg } from "../../Assets/Svgs/calendar.svg";
import { ReactComponent as AddSvg } from "../../Assets/Svgs/add_task.svg";
import { ReactComponent as MoonSvg } from "../../Assets/Svgs/moon.svg";
import { ReactComponent as SunSvg } from "../../Assets/Svgs/sun.svg";
import { ReactComponent as CloseSvg } from "../../Assets/Svgs/close.svg";

import { connect } from "react-redux";

const fixedStyled = css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
`;

// // background-color: ${({ theme }) =>
//   theme === "dark" ? "#12181b" : "#ddd"};
const SideBar = styled.div`
  width: 5rem;
  padding: 1rem 0.4rem;
  & > div > a > div > h6 {
    color: ${({ theme }) => (theme === "light" ? "#333" : "#b2becd")};
  }

  & > div > a > div > svg {
    fill: ${({ theme }) => (theme === "light" ? "112233" : "#cdecde")};
  }

  transition: margin 0.4s ease;
  ${({ ham }) => (ham ? "margin-left : -5rem; " : "")};

  @media (max-width: 540px) {
    ${fixedStyled}
    width: 5rem;
    z-index: 55;
    background-color: ${({ theme }) =>
      theme === "light" ? "#ddd" : "#12181b"};
  }
`;

const Options = styled.div`
  // padding: 1rem 0;
  // margin: 0rem 0.5rem 0 0;
`;

const Option = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 1rem;
  svg {
    height: 32px;
    width: 32px;
    * {
      pointer-events: none;
    }
  }
`;

const Nav = styled(NavLink)`
  display: block;
  margin: 1rem 0;
  text-decoration: none;

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

const ThemeOp = styled.div`
  margin: 4rem 0 0 0.5rem;
`;

const MenuCover = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background: #282c34;
    box-shadow: 1px 2px 9px 0px rgba(0, 0, 0, 0.5);
    svg {
      fill: whitesmoke;
    }
  }

  svg {
    fill: ${({ theme }) => (theme === "light" ? "112233" : "#cdecde")};
    height: 32px;
    width: 32px;
  }

  @media (min-width: 540px) {
    display: none;
  }
`;

const BackCover = styled.div`
  ${fixedStyled}
  width : 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);
  @media (min-width: 540px) {
    display: none;
  }
`;

// const NavName = styled.h6`
//   text-decoration: none;
// `;

const SideBarComponent = ({ theme, switchTheme, ham, hamswitch }) => (
  <>
    <SideBar theme={theme} ham={ham}>
      <Options theme={theme}>
        <MenuCover theme={theme} onClick={hamswitch}>
          <CloseSvg />
        </MenuCover>

        <Nav exact to="/">
          <Option>
            <HomeSvg />
          </Option>
        </Nav>

        <Nav to="/schedule">
          <Option>
            <CalendarSvg />
          </Option>
        </Nav>
        <Nav to="/add">
          <Option>
            <AddSvg />
          </Option>
        </Nav>
        <ThemeOp onClick={switchTheme}>
          <Option>{theme === "dark" ? <MoonSvg /> : <SunSvg />}</Option>
        </ThemeOp>
      </Options>
    </SideBar>
    {!ham ? <BackCover theme={theme} onClick={hamswitch}></BackCover> : null}
  </>
);

export default connect(
  ({ theme, ham }) => ({ theme, ham }),
  (dispatch) => ({
    switchTheme: () => dispatch({ type: "THEME_SWITCH" }),
    hamswitch: () => dispatch({ type: "HAM_SWITCH" }),
  })
)(SideBarComponent);

// import Button from "@material-ui/core/Button";
// import { ReactComponent as TaskSvg } from "../../Assets/Svgs/task.svg";
// import { ReactComponent as TextSvg } from "../../Assets/Svgs/chat-24px.svg";
// import { ReactComponent as SettingsSvg } from "../../Assets/Svgs/settings-24px.svg";
// import { ReactComponent as PeopleSvg } from "../../Assets/Svgs/people-24px.svg";

/* <Nav to="/groups">
        <Option>
          <PeopleSvg />
        </Option>
      </Nav> */

/* <Nav to="/settings">
        <Option>
          <SettingsSvg />
        </Option>
      </Nav> */

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

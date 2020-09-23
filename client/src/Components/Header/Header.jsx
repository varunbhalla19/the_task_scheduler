import React from "react";

import styled from "styled-components";

import { connect } from "react-redux";

import { ReactComponent as MenuSvg } from "../../Assets/Svgs/menu-24px.svg";

// background: darkslateblue;
const Header = styled.div`
  padding: 0.5rem;
  padding-bottom: 0;
  display: flex;
  align-items: center;
`;

const Heading = styled.h2`
  font-family: Kufam;
  font-size: 2rem;
  margin: 0.25rem 0 0 6rem;
  color: ${({ theme }) => (theme === "light" ? "black" : "#b2becd")};
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
`;

const HeaderComponent = ({ theme, switchHam }) => (
  <Header>
    <MenuCover theme={theme} onClick={switchHam}>
      <MenuSvg />
    </MenuCover>
    <Heading theme={theme}>Taskly</Heading>
  </Header>
);

export default connect(
  (state) => ({
    theme: state.theme,
  }),
  (dispatch) => ({ switchHam: () => dispatch({ type: "HAM_SWITCH" }) })
)(HeaderComponent);

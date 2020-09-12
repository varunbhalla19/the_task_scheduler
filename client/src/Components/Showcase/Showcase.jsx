import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

const Showcase = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => (theme === "light" ? "#ddd" : "#12181b")};
  color: ${({ theme }) => (theme === "light" ? "black" : "#b2becd")};
  display: flex;
  flex-direction: column;
  // color: #b2becd;
  // padding : 2rem;
`;

export default connect(({ theme }) => ({ theme }))(({ children, theme }) => (
  <Showcase theme={theme}>{children}</Showcase>
));

//   background-color: #12181b  #171e21     ;
// color : #b2becd;  or white or whitesmoke...

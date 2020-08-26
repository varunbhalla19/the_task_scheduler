import React from "react";
import styled from "styled-components";

const Showcase = styled.div`
  flex-grow: 1;
  background-color: #eee;
  display: flex;
  flex-direction: column;
`;

export default ({ children }) => <Showcase>{children}</Showcase>;

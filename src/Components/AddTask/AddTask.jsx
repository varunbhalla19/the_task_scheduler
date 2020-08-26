import React from "react";

import styled from "styled-components";

const Cover = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.opened ? "block" : "none")}};
`;
const TaskContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #cde;
  width: 600px;
  height: 400px;
  border-radius: 2rem;
  display: ${(props) => (props.opened ? "block" : "none")}};
`;

export default ({ open, opened }) => (
  <>
    <Cover onClick={(ev) => open(false)} opened={opened} />
    <TaskContainer onClick={() => false} opened={opened}></TaskContainer>
  </>
);

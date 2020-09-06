import React, { useContext } from "react";

import styled from "styled-components";

import { ShowHideContext } from "../../Context/AddTaskScreen";

const Cover = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.hidden ? "none" : "block")}};
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #cde;
  width: 600px;
  height: 400px;
  border-radius: 2rem;
  display: ${(props) => (props.hidden ? "none" : "block")}};
`;

export default ({ children }) => {
  const { hidden, hide, comp } = useContext(ShowHideContext);

  //   console.log('recieved Component ', comp)

  return (
    <>
      <Cover onClick={hide} hidden={hidden} />
      <Container hidden={hidden}>{comp}</Container>
    </>
  );
};

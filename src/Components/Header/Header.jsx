import React from "react";

import styled from "styled-components";

import { ReactComponent as Notifications } from "../../Assets/Svgs/notifications-24px.svg";
import { ReactComponent as AddTask } from "../../Assets/Svgs/add_circle-24px.svg";

// background: darkslateblue;
const Header = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.p`
  font-family: Comfortaa;
  font-size: 2rem;
  margin: 0.25rem 0;
`;

const HeadOptions = styled.ul`
  display: flex;
  list-style: none;
`;

const HeadOption = styled.li`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
`;
const HeadPicture = styled.li`
  width : 45px;
  height 45px;
  margin-left : 2rem ;
  background : #abc;
  border-radius : 0.5rem ;
    img {
      max-width : 100% ;
      max-height : 100% ;
    }
`;

export default ({ open, opened }) => {
  return (
    <Header>
      <div className="head-title">
        <Heading>Taskly</Heading>
      </div>
      <HeadOptions>
        <HeadOption>
          <Notifications />
        </HeadOption>
        <HeadOption>
          <AddTask onClick={() => open(!opened)} />
        </HeadOption>
        <HeadPicture>
          <img src="https://robohash.org/vbss?set=set5" alt="dp"></img>
        </HeadPicture>
      </HeadOptions>
    </Header>
  );
};

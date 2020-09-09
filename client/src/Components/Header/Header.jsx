import React, { useContext } from "react";

import styled from "styled-components";

import { ReactComponent as Notifications } from "../../Assets/Svgs/notifications-24px.svg";
import { ReactComponent as AddTaskButton } from "../../Assets/Svgs/add_circle-24px.svg";

import { ShowHideContext } from "../../Context/AddTaskScreen";

import AddTask from "../AddTask/AddTask";

// background: darkslateblue;
const Header = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h2`
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

const AddBut = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.4rem 0.25rem 0.6rem ;
  border-radius: 2rem;
  cursor: pointer;
  p {
    margin: 0 0.5rem 0 0;
  }
`;

export default () => {

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
          <TheAddButton />
        </HeadOption>
        <HeadPicture>
          <img src="https://robohash.org/vbss?set=set5" alt="dp"></img>
        </HeadPicture>
      </HeadOptions>
    </Header>
  );
};

const TheAddButton = () => {
  const { setComponent } = useContext(ShowHideContext);
  return (
    <AddBut onClick={() => setComponent(<AddTask />)}>
      <p>Add Task</p>
      <AddTaskButton />
    </AddBut>
  );
};
import React from "react";
import styled from "styled-components";

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
  margin-top: 4rem;
`;

const Option = styled.div`
  margin: 0.25rem 0 0 0.5rem;
  padding: 0.75rem ;
  cursor: pointer;
  border-radius : 1rem ;
  // background : #98a ;

  &:nth-last-child(1) {
    margin-top: 7rem;
  }
 
  svg {
    height: 36px;
    width: 36px;

    * {
      pointer-events: none;
    }
  }
`;

export default () => (
  <SideBar>
    <Options>
      <Option>
        <HomeSvg />
      </Option>
      <Option>
        <TaskSvg />
      </Option>
      <Option>
        <TextSvg />
      </Option>
      <Option>
        <CalendarSvg />
      </Option>
      <Option>
        <PeopleSvg />
      </Option>
      <Option>
        <SettingsSvg />
      </Option>
    </Options>
  </SideBar>
);

import React from "react";

// import styled from "styled-components";

import Weekly from "./Weekly";

import TaskSheet from "./TaskSheet";
import WeeklyPinned from "./WeeklyPinned";

export default () => {
  console.log("Schedule Component");

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        <Weekly />
        <TaskSheet />
      </div>
      <div style={{ width: "40%" }}>
        <WeeklyPinned />
      </div>
    </div>
  );
};

import React from "react";

// import styled from "styled-components";

import Weekly from "./Weekly";

import TaskSheet from "./TaskSheet";

export default () => {
  console.log("Schedule Component");

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        <Weekly />
        <TaskSheet />
      </div>
    </div>
  );
};

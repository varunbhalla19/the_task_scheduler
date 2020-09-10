import React from "react";

import styled from "styled-components";

import Weekly from "./Weekly";

import TaskSheet from "./TaskSheet";

export default () => {
  console.log("Schedule Component");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Weekly />
      <TaskSheet />
    </div>
  );
};

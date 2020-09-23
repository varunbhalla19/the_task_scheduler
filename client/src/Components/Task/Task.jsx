import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { ReactComponent as EditSvg } from "../../Assets/Svgs/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/Svgs/delete.svg";
import { ReactComponent as MoreSvg } from "../../Assets/Svgs/more_arrow.svg";
import { ReactComponent as PinSvg } from "../../Assets/Svgs/pushpin.svg";
import { ReactComponent as SendSvg } from "../../Assets/Svgs/send.svg";
import { ReactComponent as CloseSvg } from "../../Assets/Svgs/close.svg";

import { deleteTaskAc } from "../../redux/action-creators/task-ac";
import { useHistory } from "react-router-dom";
import { setPinAc, editTaskAc } from "../../redux/action-creators/task-ac";

const TaskContainer = styled.div`
  width: 90%;
  padding: 1.5rem 4.5rem 1rem 1.5rem;
  text-align: left;
  // cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.4);
  margin: 0.5rem auto;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  min-height: 110px;
  background: ${({ color }) => color};

  @media (min-width: 700px) {
    width: 75%;
  }

  @media (max-width: 450px) {
    width: 95%;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Descp = styled.p`
  font-size: 14px;
  margin-top: 0.5rem;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#b2becd")};

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const DateString = styled.h6`
  color: ${({ theme }) => (theme === "light" ? "#111" : "#828b97")};
  font-size: 12px;
  margin-top: 0.5rem;
`;

const TaskTitle = styled.h3`
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const colors = {
  "#ff9e9e": "#2e1e1e",
  "#ff9ed2": "#2f1d27",
  "#de97f2": "#332438",
  "#af97f2": "#292338",
  "#97baf2": "#212935",
  "#97e0f2": "#1c282c",
  "#97f2c6": "#253c31",
  "#97f2a1": "#233826",
  "#d2f297": "#3c442c",
  "#f1f297": "#40412a",
  "#f2da97": "#4b442f",
  "#f6d988": "#3a3422",
  "#f6b888": "#473629",
  "#f68888": "#412525",
  transparent: "#4a4a4a",
};

const absoluteStyle = {
  position: "absolute",
  // top: "0px",
  right: "1rem",
  width: "24px",
  height: "24px",
};

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.5rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  color: #b2becd;
  width: 90%;
  font-size: ${({ descp }) => (descp ? "0.8rem" : "1rem")};
  margin: 0.5rem 0;
`;

// const initValues = {
//   task: "",
//   descp: "",
// };
// date: "",
// dateString: new Date().toLocaleDateString("fr-CA"),
// color: "transparent",
// const history = useHistory();

const Tasks = ({ task, todayShow, deleteTask, setPin, theme, editTask }) => {
  const [values, setValues] = useState({ task: task.task, descp: task.descp });

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <TaskContainer
        color={theme === "light" ? task.color : colors[task.color]}
      >
        {editMode ? (
          <Input
            name="task"
            value={values.task}
            onChange={({ target }) => {
              setValues({ ...values, [target.name]: target.value });
            }}
            type="text"
          />
        ) : (
          <TaskTitle>{task.task}</TaskTitle>
        )}

        {editMode ? (
          <Input
            name="descp"
            value={values.descp}
            descp
            onChange={({ target }) => {
              setValues({ ...values, [target.name]: target.value });
            }}
            type="text"
          />
        ) : (
          <Descp theme={theme}> {task.descp} </Descp>
        )}

        <DateString theme={theme}>
          {todayShow
            ? null
            : task.date.toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
              })}
        </DateString>
        {editMode ? (
          <SendSvg
            onClick={() => {
              editTask(task._id, { ...task, ...values });
              setEditMode(false);
            }}
            style={{
              ...absoluteStyle,
              bottom: "1rem",
              right: "3rem",
              fill: "green",
            }}
          />
        ) : (
          <EditSvg
            onClick={() => setEditMode(!editMode)}
            style={{
              ...absoluteStyle,
              bottom: "1rem",
              right: "3rem",
              fill: "slateblue",
            }}
          />
        )}

        <DeleteSvg
          onClick={() => deleteTask(task._id, task.dateString)}
          style={{
            ...absoluteStyle,
            bottom: "1rem",
            fill: "indianred",
          }}
        />

        {editMode ? (
          <CloseSvg
            onClick={(ev) => {
              setEditMode(false);
              setValues({ task: task.task, descp: task.descp });
            }}
            style={{
              ...absoluteStyle,
              fill: "orangered",
              top: "1rem",
              height: "30px",
              width: "30px",
            }}
          />
        ) : (
          <PinSvg
            style={{
              ...absoluteStyle,
              top: "1rem",
              fill: task.pinned
                ? theme === "light"
                  ? "#333333"
                  : "#777777"
                : "none",
              stroke: !task.pinned
                ? theme === "light"
                  ? "#333333"
                  : "#777777"
                : "none",
              strokeWidth: !task.pinned ? "1rem" : "none",
            }}
            onClick={(ev) => setPin(task.pinned, task._id)}
          />
        )}
      </TaskContainer>
    </>
  );
};

export default connect(
  ({ theme }) => ({ theme }),
  (dispatch) => ({
    deleteTask: (id, dateString) => dispatch(deleteTaskAc(id, dateString)),
    setPin: (pinnedVal, id) => dispatch(setPinAc(id, pinnedVal)),
    editTask: (id, task) => dispatch(editTaskAc(id, task)),
  })
)(Tasks);

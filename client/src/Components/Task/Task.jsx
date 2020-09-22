import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { ReactComponent as EditSvg } from "../../Assets/Svgs/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/Svgs/delete.svg";
import { ReactComponent as MoreSvg } from "../../Assets/Svgs/more_arrow.svg";
import { ReactComponent as PinSvg } from "../../Assets/Svgs/pushpin.svg";

import { deleteTaskAc } from "../../redux/action-creators/task-ac";
import { useHistory } from "react-router-dom";
import { setPinAc } from "../../redux/action-creators/task-ac";

const TaskContainer = styled.div`
  width: 90%;
  padding: 1.5rem 4.5rem 1rem 1.5rem;
  text-align: left;
  cursor: pointer;
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
};

const Tasks = ({ task, todayShow, deleteTask, setPin, theme }) => {
  const history = useHistory();

  return (
    <>
      <TaskContainer
        color={theme === "light" ? task.color : colors[task.color]}
      >
        <TaskTitle>{task.task}</TaskTitle>
        <Descp theme={theme}> {task.descp} </Descp>

        <DateString theme={theme}>
          {todayShow
            ? null
            : task.date.toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
              })}
        </DateString>

        {!task.isProject ? (
          <>
            <EditSvg
              // onClick={() => setComponent(<TaskModal task={task} />)}
              style={{
                ...absoluteStyle,
                bottom: "1rem",
                right: "3rem",
                fill: "slateblue",
              }}
            />
            <DeleteSvg
              onClick={() => deleteTask(task._id, task.dateString)}
              style={{
                ...absoluteStyle,
                bottom: "1rem",
                fill: "indianred",
              }}
            />

            <PinSvg
              style={{
                ...absoluteStyle,
                width: "24px",
                height: "24px",
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
          </>
        ) : (
          <MoreSvg
            onClick={(ev) => history.push(`/groups/${task.link}`)}
            style={{
              ...absoluteStyle,
              top: "50%",
              fill: "indianred",
              width: "3rem",
              height: "3rem",
              transform: "translate(0,-50%)",
            }}
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
  })
)(Tasks);

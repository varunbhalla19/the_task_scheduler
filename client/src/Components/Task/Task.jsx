import React, { useContext } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { ReactComponent as EditSvg } from "../../Assets/Svgs/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/Svgs/delete.svg";

import { ReactComponent as MoreSvg } from "../../Assets/Svgs/more_arrow.svg";

import { ReactComponent as PinSvg } from "../../Assets/Svgs/pushpin.svg";

// import ModalHoc from "../Modal/ModalHoc";

import { deleteTaskAc } from "../../redux/action-creators/task-ac";

import { ShowHideContext } from "../../Context/AddTaskScreen";
import { Link, useHistory } from "react-router-dom";

import { setPinAc } from "../../redux/action-creators/task-ac";

// const getColor = () => colors[Math.floor(Math.random() * colors.length)];

const TaskContainer = styled.div`
  width: 80%;
  padding: 1.5rem 4.5rem 1rem 1.5rem;
  text-align: left;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.2);
  margin: 0.5rem auto;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  min-height: 110px;
  background: ${({ color }) => color};
`;
// background: ${getColor()};
const Descp = styled.p`
  color: #333;
  font-size: 14px;
  margin-top: 0.5rem;
`;

const DateString = styled.h6`
  color: #111;
  font-size: 12px;
  margin-top: 0.5rem;
`;

const TaskModal = ({ task }) => (
  <div
    style={{
      height: "100%",
      background: "whitesmoke",
      color: "#444",
      borderRadius: "2rem",
    }}
  >
    {task.task}
    {task.isProject ? <Link to={`/groups/${task.link}`}> Visit </Link> : null}
  </div>
);

// const TheInput = styled.input`
//   padding: 0.3rem 0.6rem;
//   border: 1px solid #777;
//   outline: none;
//   width: 90%;
//   border-radius: 0.5rem;
//   &:focus {
//     // border: none;
//     outline: none;
//   }
// `;

const absoluteStyle = {
  position: "absolute",
  // top: "0px",
  right: "1rem",
};

const Tasks = ({ task, todayShow, deleteTask, setPin }) => {
  const { setComponent } = useContext(ShowHideContext);
  const history = useHistory();
  // console.log("PINNED : ", task.pinned);
  return (
    <>
      <TaskContainer
        color={task.color}
        // color={getColor()}
      >
        <h3 style={{ marginBottom: "0.5rem" }}>{task.task}</h3>
        {/* <TheInput type="text" placeholder="Edit..." value={task.task} onChange={ev => {}} /> */}
        <Descp> {task.descp} </Descp>
        <DateString>
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
              onClick={() => setComponent(<TaskModal task={task} />)}
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
                fill: task.pinned ? "#333333" : "none",
                stroke: !task.pinned ? "#333333" : "none",
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

export default connect(null, (dispatch) => ({
  deleteTask: (id, dateString) => dispatch(deleteTaskAc(id, dateString)),
  setPin: (pinnedVal, id) => dispatch(setPinAc(id, pinnedVal)),
}))(Tasks);

import React, { useContext } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { ReactComponent as EditSvg } from "../../Assets/Svgs/edit.svg";
import { ReactComponent as DeleteSvg } from "../../Assets/Svgs/delete.svg";

import { ReactComponent as MoreSvg } from "../../Assets/Svgs/more_arrow.svg";

// import ModalHoc from "../Modal/ModalHoc";

import { deleteTaskAc } from "../../redux/action-creators/task-ac";

import { ShowHideContext } from "../../Context/AddTaskScreen";
import { Link, useHistory } from "react-router-dom";

const TaskContainer = styled.div`
  width: 80%;
  padding: 1.5rem 3rem 1rem 1.5rem;
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
  background: ${({ color }) => color || "transparent" };
`;
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

const absoluteStyle = {
  position: "absolute",
  // top: "0px",
  right: "1rem",
};

const Tasks = ({ task, todayShow, deleteTask }) => {
  const { setComponent } = useContext(ShowHideContext);
  const history = useHistory();
  return (
    <>
      <TaskContainer color={task.color}>
        <h3 style={{ marginBottom: "0.5rem" }}> {task.task} </h3>
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
                top: "1rem",
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
}))(Tasks);

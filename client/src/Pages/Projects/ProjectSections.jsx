import React, { useState } from "react";

import { connect } from "react-redux";

import { ReactSortable } from "react-sortablejs";

import { TheAddBtn } from "./ProjectSingle";

import styled from "styled-components";

import { ReactComponent as MoreOptions } from "../../Assets/Svgs/more_horiz-24px.svg";

const SingleProject = styled.div`
  // border: 1px solid black;
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);

  &.drag {
    background: #bbb;
    box-shadow: none;
    color: #333;
  }
`;

const Section = styled.div`
  button {
    width: 100%;
    padding: 0.6rem;
    border-radius: 0.4rem;
    outline: none;
    border: 1px solid #999;
    cursor: pointer;
    color: #444;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  svg {
    cursor: pointer;
    fill: #999999;
    * {
      pointer-events: none;
    }
  }
`;

const HeadInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin: 0 0.5rem;
`;

const Number = styled.span`
  font-size: 14px;
  border-radius: 3rem;
  //   border : 1px solid black;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  color: #777;
`;

const DelBut = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  margin: 0.5rem 0;
  border: 1px dotted indianred;
`;

const TheList = [{ name: "Delete" }];

const ProjectSections = ({
  section,
  tasksArray,
  setTaskArrayDD,
  deleteSectionTask,
}) => {
  // console.log("Project Sections ", section.value);

  const [inn, setIn] = useState(false);

  const [theId, setId] = useState(null);

  

  const [parentId, setParentId] = useState(null);

  return (
    <Section>
      <Head>
        <HeadInside>
          <Title> {section.value} : </Title>
          <Number> {tasksArray.length} </Number>
        </HeadInside>
        <MoreOptions />
      </Head>

      <ul>
        <ReactSortable
          list={tasksArray}
          setList={(list) => {
            setTaskArrayDD(section.id, list);
          }}
          animation="200"
          group="x"
          ghostClass="drag"
          filter="deleteZone"
        >
          {tasksArray.map((el) => (
            <SingleProject
              onDragStart={(ev) => {
                setId(el.id);
                setParentId(section.id);
              }}
              onDragEnd={(ev) => {
                console.log("dragEnd");
                if (inn && theId) {
                  console.log("Delete ", theId);
                  deleteSectionTask(theId, section.id);
                }
                setId(null);
                setParentId(null);
                setIn(false);
              }}
              key={el.id}
              parentId={parentId}
            >
              <h4> {el.value} </h4>
            </SingleProject>
          ))}
        </ReactSortable>
      </ul>
      <Del
        inn={inn}
        setIn={setIn}
        theId={theId}
        parentId={section.id}
        pId={parentId}
      />
      <TheAddBtn id={section.id} secTask="task" text="+ Add Task" />
    </Section>
  );
};

const Del = ({ inn, setIn, theId, parentId, pId }) => {
  return (
    <ReactSortable
      list={TheList}
      setList={() => {}}
      group={{
        name: "x",
        put: false,
        pull: false,
      }}
      style={{
        background: `${inn ? "#ffa8a8" : "transparent"}`,
        color: `${inn ? "red" : "black"}`,
      }}
      sort="false"
    >
      <DelBut
        id="deleteZone"
        onDragEnter={(ev) => {
          if (theId && parentId === pId) {
            setIn(true);
          }
        }}
        onDragLeave={(ev) => {
          setIn(false);
        }}
      >
        Delete
      </DelBut>
    </ReactSortable>
  );
};

export default connect(
  (state, props) => ({
    tasksArray: state.sectionTasks[props.section.id] || [],
  }),
  (dispatch) => ({
    setTaskArrayDD: (id, ar) =>
      dispatch({ type: "NEW_AR", payload: { id, ar } }),
    deleteSectionTask: (id, arId) =>
      dispatch({ type: "DEL_SEC_TASK", payload: { id, arId } }),
  })
)(ProjectSections);

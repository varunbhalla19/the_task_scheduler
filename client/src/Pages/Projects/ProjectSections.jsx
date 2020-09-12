import React, { useState } from "react";

import { connect } from "react-redux";

import { ReactSortable } from "react-sortablejs";

import { TheAddBtn } from "./ProjectSingle";

import styled from "styled-components";

import { ReactComponent as MoreOptions } from "../../Assets/Svgs/more_horiz-24px.svg";

import {
  setSectionTaskSection,
  deleteSectionTaskAc,
} from "../../redux/action-creators/project-ac";

const SingleProject = styled.div`
  // border: 1px solid black;
  margin: 1rem 0;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);

  background: ${({ theme }) => (theme === "dark" ? "#1f2628" : "transparent")};

  // background: red;

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
    background: ${({ theme }) =>
      theme === "light" ? "whitesmoke" : "#2b3336"};
    color: ${({ theme }) => (theme === "light" ? "black" : "#b2becd")};
  }

  & > div #deleteZone {
    color: ${({ theme }) => (theme === "light" ? "" : "indianred")};
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
  background: ${({ theme }) => (theme === "dark" ? "#111" : "#ddd")};
  color: ${({ theme }) => (theme === "dark" ? "#b2becd" : "#777")};
  // color: ;
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
  projId,
  setSectionTaskSection,
  deleteSectionTaskAc,
  theme,
}) => {
  // console.log("Project Sections ", section.value);

  const [inn, setIn] = useState(false);

  const [theId, setId] = useState(null);

  const [parentId, setParentId] = useState(null);

  return (
    <Section theme={theme}>
      <Head>
        <HeadInside>
          <Title> {section} : </Title>
          <Number theme={theme}> {tasksArray.length} </Number>
        </HeadInside>
        <MoreOptions />
      </Head>

      <ul data-section={section}>
        <ReactSortable
          list={tasksArray}
          setList={(list) => {
            setTaskArrayDD(section, list);
          }}
          animation="200"
          group="x"
          ghostClass="drag"
          filter="deleteZone"
          onAdd={(ev) => {
            setSectionTaskSection(
              ev.item.dataset.id,
              ev.to.parentElement.dataset.section
            );
            // console.log(ev.from.parentElement.dataset.section);
          }}
        >
          {tasksArray.map((el) => (
            <SingleProject
              theme={theme}
              onDragStart={(ev) => {
                setId(el._id);
                setParentId(section);
              }}
              onDragEnd={(ev) => {
                console.log("dragEnd");
                if (inn && theId) {
                  console.log("Delete ", theId);
                  deleteSectionTaskAc(theId, section);
                }
                setId(null);
                setParentId(null);
                setIn(false);
              }}
              key={el._id}
              parentId={parentId}
              data-id={el.id}
            >
              <p> {el.name} </p>
            </SingleProject>
          ))}
        </ReactSortable>
      </ul>
      <Del
        inn={inn}
        setIn={setIn}
        theId={theId}
        parentId={section}
        pId={parentId}
      />
      <TheAddBtn section={section} text="+ Add Task" projId={projId} />
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
          console.log("delzone entered ", theId, parentId, pId);
          if (theId && parentId === pId) {
            setIn(true);
          }
        }}
        onDragLeave={(ev) => {
          console.log("delzone left");
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
    tasksArray: state.sectionTasks[props.section] || [],
    theme: state.theme,
  }),
  (dispatch) => ({
    setTaskArrayDD: (section, list) =>
      dispatch({ type: "NEW_AR", payload: { section, list } }),
    deleteSectionTask: (id, section) =>
      dispatch({ type: "DEL_SEC_TASK", payload: { id, section } }),
    setSectionTaskSection: (id, section) =>
      dispatch(setSectionTaskSection(id, section)),
    deleteSectionTaskAc: (id, section) =>
      dispatch(deleteSectionTaskAc(id, section)),
  })
)(ProjectSections);

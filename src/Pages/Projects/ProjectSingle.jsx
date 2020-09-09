import React, { useContext, useState } from "react";

import { ReactSortable } from "react-sortablejs";

import { useParams, Redirect } from "react-router-dom";

import styled from "styled-components";

import Input from "../../Components/Input/Input";

import { ShowHideContext } from "../../Context/AddTaskScreen";

import { connect } from "react-redux";

const getShortDate = (d) => {
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
};

const Container = styled.div`
  padding: 1rem;
`;

const Headings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TheProjectSingle = ({ projects, sections }) => {
  return (
    <Container>
      {projects ? (
        <>
          <Headings>
            <h2> {projects.projectName} </h2>
            <p>
              {getShortDate(projects.datefrom)} -{" "}
              {getShortDate(projects.dateto)}
            </p>
          </Headings>
          <AddBtn>
            <TheAddBtn id={projects.id} secTask="section" text="Add Section" />
          </AddBtn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${sections.length},1fr)`,
              gap: "1rem",
              margin: "2rem auto 1rem",
              width: "90%",
            }}
          >
            {sections.map((el) => (
              <ConnectedProjectSections section={el} key={el.id} />
            ))}
          </div>
        </>
      ) : (
        <p>
          <Redirect to="/groups" />
        </p>
      )}
    </Container>
  );
};

const SuperProjectSingle = connect(({ projects, sections }, { projId }) => ({
  projects: projects.find((pr) => pr.id === projId),
  sections: sections[projId] || [],
}))(TheProjectSingle);

const ProjectSingle = () => {
  const { projId } = useParams();
  return <SuperProjectSingle projId={projId} />;
};

const TheAddBtn = ({ id, secTask, text }) => {
  const { setComponent } = useContext(ShowHideContext);

  return (
    <button
      onClick={() =>
        setComponent(<ConnectedAddSection projId={id} secTask={secTask} />)
      }
    >
      {text}
    </button>
  );
};

const AddSection = ({ projId, secTask, addSection, addSectionTasks }) => {
  const [sec, setSec] = useState("");
  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (!sec) {
            return;
          }
          if (secTask === "section") {
            addSection({ value: sec, id: Date.now() }, projId);
          } else {
            addSectionTasks({ value: sec, id: Date.now() }, projId);
          }
        }}
      >
        <Input
          inpValue={(name, value) => setSec(value)}
          type="text"
          placeholder={`Add ${secTask}`}
        />
        <button> Send </button>
      </form>
    </>
  );
};

const ConnectedAddSection = connect(null, (dispatch) => ({
  addSection: (task, id) =>
    dispatch({ type: "ADD_SECTION", payload: { section: task, projId: id } }),
  addSectionTasks: (task, id) =>
    dispatch({
      type: "ADD_SECTIONTASK",
      payload: { section: task, projId: id },
    }),
}))(AddSection);

const ProjectSections = ({ section, tasksArray, setTaskArrayDD }) => {
  console.log("Project Sections ", section.value);

  return (
    <div>
      <h4>
        {section.value} : {tasksArray.length}
      </h4>

      <ul>
        <ReactSortable
          list={tasksArray}
          setList={(list) => {
            // console.log("setList called ", list, list === tasksArray);
            setTaskArrayDD(section.id, list);
          }}
          animation="200"
          group="x"
          ghostClass="drag"
        >
          {tasksArray.map((el) => (
            <div
              style={{
                border: "1px solid black",
                margin: "0.5rem 0",
                padding: "1rem",
                cursor: "pointer",
              }}
              key={el.id}
            >
              {el.value}
            </div>
          ))}
        </ReactSortable>
      </ul>

      <TheAddBtn id={section.id} secTask="task" text="Add Task" />
    </div>
  );
};

const ConnectedProjectSections = connect(
  (state, props) => ({
    tasksArray: state.sectionTasks[props.section.id] || [],
  }),
  (dispatch) => ({
    setTaskArrayDD: (id, ar) =>
      dispatch({ type: "NEW_AR", payload: { id: id, ar: ar } }),
  })
)(ProjectSections);

export default ProjectSingle;

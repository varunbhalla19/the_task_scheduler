import React, { useContext, useState, useEffect } from "react";

// import { ReactSortable } from "react-sortablejs";

import { useParams, Redirect } from "react-router-dom";

import styled from "styled-components";

import Input from "../../Components/Input/Input";

import { ShowHideContext } from "../../Context/AddTaskScreen";

import { connect } from "react-redux";

import ProjectSections from "./ProjectSections";
import {
  addSectionTaskAc,
  fetchSectionTaskAc,
} from "../../redux/action-creators/project-ac";

const getShortDate = (d) => {
  return new Date(d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
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

const TheProjectSingle = ({
  projects,
  sections,
  projId,
  fetchSectionTaskAc,
}) => {
  useEffect(() => {
    fetchSectionTaskAc(projId);
  }, [fetchSectionTaskAc, projId]);
  return (
    <Container>
      {projects ? (
        <>
          <Headings>
            <h2> {projects.name} </h2>
            <p>
              {getShortDate(projects.datefrom)} -{" "}
              {getShortDate(projects.dateto)}
            </p>
          </Headings>
          <AddBtn>
            {/* <TheAddBtn id={projects.id} secTask="section" text="Add Section" /> */}
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
              <ProjectSections section={el} key={el} projId={projId} />
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

const SuperProjectSingle = connect(
  ({ projects }, { projId }) => ({
    projects: projects.find((pr) => pr._id === projId),
    sections: ["Done", "In Progress", "UpComing"],
  }),
  (dispatch) => ({
    fetchSectionTaskAc: (projId) => dispatch(fetchSectionTaskAc(projId)),
  })
)(TheProjectSingle);

const ProjectSingle = () => {
  const { projId } = useParams();
  return <SuperProjectSingle projId={projId} />;
};

export const TheAddBtn = ({ section, text, projId }) => {
  const { setComponent } = useContext(ShowHideContext);

  return (
    <button
      onClick={() =>
        setComponent(<ConnectedAddSection section={section} projId={projId} />)
      }
    >
      {text}
    </button>
  );
};

const AddSection = ({ section, addSectionTaskAc, projId }) => {
  const [sec, setSec] = useState("");

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          if (sec) {
            console.log(sec, section, projId);
            addSectionTaskAc({ name: sec, section: section }, projId);
          }
        }}
      >
        <Input
          inpValue={(name, value) => setSec(value)}
          type="text"
          placeholder={`Add Task`}
        />
        <button> Send </button>
      </form>
    </>
  );
};

const ConnectedAddSection = connect(null, (dispatch) => ({
  addSectionTaskAc: (secTask, projId) =>
    dispatch(addSectionTaskAc(secTask, projId)),
}))(AddSection);

export default ProjectSingle;

// if (secTask === "section") {
//   addSection({ value: sec, id: Date.now() }, projId);
// } else {// }

// addSection: (task, id) =>    dispatch({ type: "ADD_SECTION", payload: { section: task, projId: id } }),
// addSectionTasks: (task, section) =>
// dispatch({
//   type: "ADD_SECTIONTASK",
//   payload: { task: task, section: section },
// }),

// secTask,
// addSection,

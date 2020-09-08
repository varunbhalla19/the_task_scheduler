import React, { useContext, useState, useEffect } from "react";

import { ReactSortable } from "react-sortablejs";

import { useParams, Redirect } from "react-router-dom";

import styled from "styled-components";

import Input from "../../Components/Input/Input";

import { ShowHideContext } from "../../Context/AddTaskScreen";
// import AddProject from "./AddProject";
// import ProjectsShow from "./ProjectsShow";

import { ProjectContext } from "../../Context/ProjectProvider";

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

export default () => {
  const { projId } = useParams();

  const { projects, sections } = useContext(ProjectContext);

  const proj = projects.find((pr) => pr.id === projId);

  const sectionsArray = sections[projId] || [];

  // console.log( projId, proj )

  return (
    <Container>
      {proj ? (
        <>
          <Headings>
            <h2> {proj.projectName} </h2>
            <p>
              {proj.datefrom.getShortDate()} - {proj.dateto.getShortDate()}
            </p>
          </Headings>
          <AddBtn>
            <TheAddBtn id={proj.id} secTask="section" text="Add Section" />
          </AddBtn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${sectionsArray.length},1fr)`,
              gap: "1rem",
              margin: "2rem auto 1rem",
              width: "90%",
            }}
          >
            {sectionsArray.map((el) => (
              <ProjectSections section={el} key={el.id} />
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

const TheAddBtn = ({ id, secTask, text }) => {
  const { setComponent } = useContext(ShowHideContext);

  return (
    <button
      onClick={() => setComponent(<AddSection projId={id} secTask={secTask} />)}
    >
      {text}
    </button>
  );
};

const AddSection = ({ projId, secTask }) => {
  const [sec, setSec] = useState("");

  const { addSection, addSectionTasks } = useContext(ProjectContext);

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

// const compareArrays = (ar1,ar2) => {
//   ar1.forEach(element => {

//   });
// }

const ProjectSections = ({ section }) => {
  const { sectionTasks, setTaskArrayDD } = useContext(ProjectContext);

  const tasksArray = sectionTasks[section.id] || [];

  console.log('Project Sections');

  return (
    <div>
      <h4>
        {section.value} : {tasksArray.length}
      </h4>

      <ul>
        <ReactSortable
          list={tasksArray}
          setList={(list) => {
            console.log("setList called ", list, list === tasksArray);
            setTaskArrayDD( section.id, list )
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

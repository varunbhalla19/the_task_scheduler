import React, { useContext } from "react";

import { useParams, Redirect } from "react-router-dom";

import styled from "styled-components";

// import { ShowHideContext } from "../../Context/AddTaskScreen";
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

export default () => {
  const { projId } = useParams();

  const { projects } = useContext(ProjectContext);

  const proj = projects.find((pr) => pr.id === projId);

  // console.log( projId, proj )

  return (
    <Container>
      {proj ? (
        <Headings>
          <h2> Hoye {proj.projectName} </h2>
          <p>
            {proj.datefrom.getShortDate()} - {proj.dateto.getShortDate()}
          </p>
        </Headings>
      ) : (
        <p>
          <Redirect to="/groups" />
        </p>
      )}
    </Container>
  );
};

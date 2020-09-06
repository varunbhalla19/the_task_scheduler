import React, { useContext } from "react";

import styled from "styled-components";

import { ProjectContext } from "../../Context/ProjectProvider";

import { useHistory, useRouteMatch } from "react-router-dom";

const ProjectsShow = styled.div`
  //   flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 1rem;
  padding: 1rem 2rem;
  place-items: center;
  margin: 0 auto;
  width: 85%;
`;

const Project = styled.div`
  padding: 1rem;
  background: whitesmoke;
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.6);
  border-radius: 2rem;
  width: 100%;
  cursor: pointer;
`;

const PrDate = styled.div`
  font-size: 10px;
  margin: 0.5rem 0;
`;

Date.prototype.getShortDate = function () {
  return this.toLocaleDateString(undefined, { month: "short", day: "numeric" });
};

const TheProject = () => {
  const { projects } = useContext(ProjectContext);
  let history = useHistory();

  console.log("ProjectShow Rendered");

  const match = useRouteMatch();

  return (
    <ProjectsShow>
      {projects.map((pr) => (
        <Project
          onClick={(ev) => history.push(`${match.url}/${pr.id}`)}
          key={pr.id}
        >
          <h3>{pr.projectName}</h3>
          <PrDate>
            {pr.datefrom.getShortDate()} - {pr.dateto.getShortDate()}
          </PrDate>
        </Project>
      ))}
    </ProjectsShow>
  );
};

export default TheProject;

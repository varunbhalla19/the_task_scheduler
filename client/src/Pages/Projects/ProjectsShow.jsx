import React from "react";

import styled from "styled-components";

import { useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

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
  // background: whitesmoke;
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.6);
  border-radius: 2rem;
  width: 100%;
  cursor: pointer;
`;

const PrDate = styled.div`
  font-size: 10px;
  margin: 0.5rem 0;
`;

const getShortDate = (d) => {
  return new Date(d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
};

const TheProject = ({ projects }) => {
  console.log("ProjectShow Rendered");

  const match = useRouteMatch(),
    history = useHistory();

  return (
    <ProjectsShow>
      {projects.map((pr) => (
        <Project
          onClick={(ev) => history.push(`${match.url}/${pr._id}`)}
          key={pr._id}
        >
          {/* {console.log(new Date(pr.datefrom), new Date(pr.dateto))} */}
          <h3>{pr.name}</h3>
          <PrDate>
            {getShortDate(pr.datefrom)} - {getShortDate(pr.dateto)}
          </PrDate>
          {/*  Percentage to Show!  */}
        </Project>
      ))}
    </ProjectsShow>
  );
};

export default connect((state) => ({
  projects: state.projects,
}))(TheProject);

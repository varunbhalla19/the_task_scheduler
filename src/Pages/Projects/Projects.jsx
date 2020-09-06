import React, { useContext } from "react";

import {
  Route,
  Switch,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";

import styled from "styled-components";

import { ShowHideContext } from "../../Context/AddTaskScreen";

import AddProject from "./AddProject";

import { ProjectContext } from "../../Context/ProjectProvider";

import ProjectsShow from "./ProjectsShow";

import ProjectSingle from "./ProjectSingle";

const Container = styled.div`
  height: 100%;
  background: indianred;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const AddButton = styled.div`
  border: none;
  outline: none;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(65deg, darkslateblue, slateblue);
  color: whitesmoke;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  //   box-shadow : 2px 2px 8px 1px rgba(0,0,0,0.3);
`;

const Title = styled.h2`
  margin: 0.5rem 0;
  text-align: left;
`;

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  text-align: left;
  padding: 0 4rem;
`;

const Stat = styled.div`
  margin: 0 1rem 0 0;
`;

const StatTitle = styled.p`
  font-size: 10px;
`;

const StatOnly = styled.div`
  display: flex;
`;

export default () => {
  const match = useRouteMatch();

  console.log("Match ", match);

  console.log("Project Comp Rendered");

  return (
    <Switch>
      <Route exact path={match.path}>
        <Container>
          <TitleContainer>
            <Title>Projects</Title>
            <h4>
              {new Date().toLocaleDateString(undefined, {
                month: "long",
                year: "numeric",
              })}
            </h4>
          </TitleContainer>
          <StatContainer>
            <StatOnly>
              <Stat>
                <h4>5</h4>
                <StatTitle> In Progress </StatTitle>
              </Stat>
              <Stat>
                <h4>7</h4>
                <StatTitle> Upcoming </StatTitle>
              </Stat>
              <Stat>
                <h4>12</h4>
                <StatTitle> Total </StatTitle>
              </Stat>
            </StatOnly>
            <TheAddButton />
          </StatContainer>

          <ProjectsShow />
        </Container>
      </Route>
      <Route path={`${match.path}/:projId`}>
        <ProjectSingle />
      </Route>
    </Switch>
  );
};

const TheAddButton = () => {
  const { setComponent } = useContext(ShowHideContext);

  return (
    <AddButton onClick={() => setComponent(<AddProject />)}>
      Add Project
    </AddButton>
  );
};

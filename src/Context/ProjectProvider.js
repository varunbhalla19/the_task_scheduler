import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects: [],
  addProject: () => {},
});

Date.getToday = () => new Date().toDateString();

// { a : { date : DATE ,taskList : [ {}, {} ] } , b : { date:DATE, taskList : [ {} , {} , {} ] } }

const addProject = (project, projects) => {
  console.log("project recieved ", project);
  return [...projects, project];
};

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      projectName: "Abc Xyz",
      id: "7288288",
      datefrom: new Date(2020, 8, 9),
      dateto: new Date(2020, 8, 20),
    },
  ]);

  return (
    <ProjectContext.Provider
      value={{
        addProject: (newProject) =>
          setProjects(addProject(newProject, projects)),
        projects: projects,
      }}
    >
      {children} {console.log("All Projects ", projects)}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

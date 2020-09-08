import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects: [],
  addProject: () => {},
  sections: {},
  addSection: () => {},
  sectionTasks: {},
  addSectionTasks: () => {},
  setTaskArrayDD: () => {},
});

Date.getToday = () => new Date().toDateString();

// { a : { date : DATE ,taskList : [ {}, {} ] } , b : { date:DATE, taskList : [ {} , {} , {} ] } }

const addProject = (project, projects) => {
  console.log("project recieved ", project);

  return [...projects, project];
};

const initProj = [
  {
    projectName: "Abc Xyz",
    id: "7288288",
    datefrom: new Date(2020, 8, 9),
    dateto: new Date(2020, 8, 20),
  },
];

const addSectionMethod = (section, projId, sections) => ({
  ...sections,
  [projId]: sections[projId] ? [...sections[projId], section] : [section],
});

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(initProj);
  const [sections, setSections] = useState({
    7288288: [
      { id: "7288288959", value: "Section A" },
      { id: "7288288958", value: "Section B" },
      { id: "7288288957", value: "Section C" },
    ],
  });
  const [tasks, setTasks] = useState({
    7288288959: [
      {
        id: "7288288959",
        value: "Task A a",
      },
      {
        id: "6288288959",
        value: "Task A b",
      },
      {
        id: "5288288959",
        value: "Task A c",
      },
      {
        id: "052882889590",
        value: "Task A d",
      },
    ],
    7288288958: [
      {
        id: "7278288959",
        value: "Task B a",
      },
      {
        id: "6368288959",
        value: "Task B b",
      },
      {
        id: "5458288959",
        value: "Task B c",
      },
    ],
    7288288957: [
      {
        id: "72088388959",
        value: "Task C a",
      },
      {
        id: "62188488959",
        value: "Task C b",
      },
      {
        id: "52288588959",
        value: "Task C c",
      },
      {
        id: "42288588959",
        value: "Task C d",
      },
      {
        id: "32288588959",
        value: "Task C e",
      },
    ],
  });

  // console.log("sections are ", sections);
  // console.log("tasks are ", tasks);

  return (
    <ProjectContext.Provider
      value={{
        addProject: (newProject) =>
          setProjects(addProject(newProject, projects)),
        projects: projects,
        sections: sections,
        addSection: (section, projId) => {
          console.log(projId);
          setSections(addSectionMethod(section, projId, sections));
        },
        sectionTasks: tasks,
        addSectionTasks: (task, id) => {
          setTasks(addSectionMethod(task, id, tasks));
        },
        setTaskArrayDD: (id, ar) =>
          setTasks((tasks) => ({
            ...tasks,
            [id]: ar,
          })),
      }}
    >
      {children} 
      {/* {console.log("All Projects ", projects)} */}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

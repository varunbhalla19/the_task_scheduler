const initProj = [
  {
    projectName: "Abc Xyz",
    id: "7288288",
    datefrom: new Date(2020, 8, 9),
    dateto: new Date(2020, 8, 20),
  },
];

const initSections = {
  7288288: [
    { id: "7288288959", value: "Done" },
    { id: "7288288958", value: "In Progress" },
    { id: "7288288957", value: "UpComing" },
  ],
};

const initSectionTasks = {
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
};

const projectReducer = (state = initProj, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const sectionsReducer = (state = initSections, { type, payload }) => {
  switch (type) {
    case "ADD_SECTION":
      return {
        ...state,
        [payload.projId]: state[payload.projId]
          ? [...state[payload.projId], payload.section]
          : [payload.section],
      };
    default:
      return state;
  }
};

const sectionTasksReducer = (state = initSectionTasks, { type, payload }) => {
  switch (type) {
    case "ADD_SECTIONTASK":
      return {
        ...state,
        [payload.projId]: state[payload.projId]
          ? [...state[payload.projId], payload.section]
          : [payload.section],
      };
    case "NEW_AR":
      return {
        ...state,
        [payload.id]: payload.ar,
      };
    case "DEL_SEC_TASK":
      return {
        ...state,
        [payload.arId]: state[payload.arId].filter(
          (el) => el.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export { projectReducer, sectionsReducer, sectionTasksReducer };

// const initProj = [
//   {
//     projectName: "Abc Xyz",
//     _id: "7288288",
//     datefrom: new Date(2020, 8, 9),
//     dateto: new Date(2020, 8, 20),
//   },
// ];

// {
//   ...projects,
//   sectionTasks : [
//     // secTasks Array [ name, section : "Done" , id ]
//   ]
// }

// const initSectionTasks = {
//   Done: [
//     {
//       id: "7288288959",
//       value: "Task A a",
//     },
//     {
//       id: "6288288959",
//       value: "Task A b",
//     },
//     {
//       id: "5288288959",
//       value: "Task A c",
//     },
//     {
//       id: "052882889590",
//       value: "Task A d",
//     },
//   ],
//   "In Progress": [
//     {
//       id: "7278288959",
//       value: "Task B a",
//     },
//     {
//       id: "6368288959",
//       value: "Task B b",
//     },
//     {
//       id: "5458288959",
//       value: "Task B c",
//     },
//   ],
//   UpComing: [
//     {
//       id: "72088388959",
//       value: "Task C a",
//     },
//     {
//       id: "62188488959",
//       value: "Task C b",
//     },
//     {
//       id: "52288588959",
//       value: "Task C c",
//     },
//     {
//       id: "42288588959",
//       value: "Task C d",
//     },
//     {
//       id: "32288588959",
//       value: "Task C e",
//     },
//   ],
// };

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    case "FETCHED_PROJECT":
      return action.payload;
    default:
      return state;
  }
};

const initSections = ["Done", "In Progress", "UpComing"];

const sectionsReducer = (state = initSections, action) => {
  return state;
};

const fetchedSectionTasks = (secTaskArr, projId) => {
  // console.log(secTaskArr, projId);
  return initSections.reduce((ac, el) => {
    return { ...ac, [el]: secTaskArr.filter((st) => st.section === el) };
  }, {});
};

// const addSectionTask = (section, task) => {

//   return {
//     [section] :
//   }

// };

console.log();

const sectionTasksReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "ADD_SECTIONTASK":
      console.log("got ", payload.section, payload.task);
      return {
        ...state,
        [payload.section]: state[payload.section]
          ? [...state[payload.section], payload]
          : [payload],
      };
    case "NEW_AR":
      return {
        ...state,
        [payload.section]: payload.list,
      };
    case "FETCH_SEC_TASK":
      return fetchedSectionTasks(payload.sectionTasks, payload.projId);

    case "DEL_SEC_TASK":
      return {
        ...state,
        [payload.section]: state[payload.section].filter(
          (el) => el._id !== payload.id
        ),
      };
    default:
      return state;
  }
};

export { projectReducer, sectionsReducer, sectionTasksReducer };

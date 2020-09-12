import { combineReducers } from "redux";

import tasksReducer from "./task-reducer";

import {
  projectReducer,
  sectionsReducer,
  sectionTasksReducer,
} from "./project-reducer";

import weekDayReducer from "./weekday-reducer";

import weekReducer from "./week-reducer";

import DeleteDropReducer from "./deleteDrop-reducer";

const themeReducer = (state = "dark", { type }) =>
  type === "THEME_SWITCH" ? (state === "light" ? "dark" : "light") : state;

const rootReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectReducer,
  sections: sectionsReducer,
  sectionTasks: sectionTasksReducer,
  weekDay: weekDayReducer,
  week: weekReducer,
  inDelete: DeleteDropReducer,
  // switch: switchReducer,
  theme: themeReducer,
});

export default rootReducer;

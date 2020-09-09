import { combineReducers } from "redux";

import tasksReducer from "./task-reducer";

import {projectReducer ,sectionsReducer,sectionTasksReducer } from "./project-reducer";

import weekDayReducer from './weekday-reducer'

import weekReducer from './week-reducer'

// const projectReducer = (state = [], action) => {};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectReducer,
  sections: sectionsReducer,
  sectionTasks: sectionTasksReducer,
  weekDay : weekDayReducer,
  week : weekReducer,
});

export default rootReducer;

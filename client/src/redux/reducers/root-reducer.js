import { combineReducers } from "redux";

import tasksReducer from "./task-reducer";
import weekDayReducer from "./weekday-reducer";
import weekReducer from "./week-reducer";

const themeReducer = (state = "dark", { type }) =>
  type === "THEME_SWITCH" ? (state === "light" ? "dark" : "light") : state;

const hamReducer = (state = true, { type }) =>
  type === "HAM_SWITCH" ? (state = !state) : state;

const rootReducer = combineReducers({
  tasks: tasksReducer,
  weekDay: weekDayReducer,
  week: weekReducer,
  theme: themeReducer,
  ham: hamReducer,
});

export default rootReducer;

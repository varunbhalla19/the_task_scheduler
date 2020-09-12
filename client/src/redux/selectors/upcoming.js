import { createSelector } from "reselect";

const tasks = (tasks) => tasks;

const objectTasks = createSelector(tasks, (tasks) => Object.values(tasks));

const upcomingFiltered = createSelector([objectTasks], (objectTasks) =>
  objectTasks.filter(({ date, taskList }) => date > new Date())
);

const upcomingSorted = createSelector([upcomingFiltered], (upcomingFiltered) =>
  upcomingFiltered.sort((t1, t2) => (t1.date < t2.date ? -1 : 1))
);

const finalUpcoming = createSelector([upcomingSorted], (upcomingSorted) =>
  upcomingSorted.reduce((ar, taskObj) => [...ar, ...taskObj.taskList], [])
);

export { finalUpcoming };

// Object.values(tasks)
//   .filter(({ date, taskList }) => date > new Date())
//   .sort((t1, t2) => (t1.date < t2.date ? -1 : 1))
//   .reduce((ar, taskObj) => [...ar, ...taskObj.taskList], []);

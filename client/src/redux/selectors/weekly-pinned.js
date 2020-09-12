import { createSelector } from "reselect";

const week = (state) => state.week;

const tasks = (state) => state.tasks;

const WeeklyPinnedTasksSelector = createSelector(
  [week, tasks],
  (week, tasks) => {
    return week.reduce(
      (ac, date) =>
        tasks[date.toDateString()]
          ? [
              ...ac,
              ...tasks[date.toDateString()].taskList.filter(
                (task) => task.pinned
              ),
            ]
          : ac,

      []
    );
  }
);

export { WeeklyPinnedTasksSelector };

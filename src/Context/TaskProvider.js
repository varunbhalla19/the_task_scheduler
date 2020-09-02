import React, { useState, createContext } from "react";

export const TaskContext = createContext({
  tasks: {},
  addTask: () => {},
  todayTask: () => {},
  upComingTask: () => {},
});

Date.getToday = () => new Date().toDateString();

// { a : { date : DATE ,taskList : [ {}, {} ] } , b : { date:DATE, taskList : [ {} , {} , {} ] } }

const addTask = (task, tasks) => {
  if (!tasks[task.dateString]) {
    return {
      ...tasks,
      [task.dateString]: { date: task.date, taskList: [task] },
    };
  } else {
    return {
      ...tasks,
      [task.dateString]: {
        date: task.date,
        taskList: [...tasks[task.dateString].taskList, task],
      },
    };
  }
};

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({});

  const getUpComing = () =>
    Object.values(tasks).filter(({ date, taskList }) => date > new Date());

  return (
    <TaskContext.Provider
      value={{
        addTask: (newTask) => setTasks(addTask(newTask, tasks)),
        tasks: tasks,
        upComingTask: getUpComing,
        todayTask: () =>
          tasks[Date.getToday()] ? tasks[Date.getToday()]["taskList"] : [],
      }}
    >
      {children} {console.log("All Tasks ", tasks)}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

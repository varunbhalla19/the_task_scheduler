const addTask = (tasks, task) => {
  if (!tasks[task.dateString]) {
    return {
      ...tasks,
      [task.dateString]: {
        date: task.date,
        taskList: [task],
      },
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

export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return addTask(state, action.payload); // action.payload would be task object
    default:
      return state;
  }
};

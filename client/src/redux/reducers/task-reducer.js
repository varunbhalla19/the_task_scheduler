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

const deleteTask = (id, ar) => ar.filter((el) => el.id !== id);

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return addTask(state, payload);
    case "DELETE_TASK":
      return {
        ...state,
        [payload.dateString]: {
          ...state[payload.dateString],
          taskList: deleteTask(payload.id, state[payload.dateString].taskList),
        },
      };
    default:
      return state;
  }
};

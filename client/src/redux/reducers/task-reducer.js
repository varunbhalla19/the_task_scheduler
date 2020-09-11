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

const deleteTask = (id, ar) => ar.filter((el) => el._id !== id);

const arToTasks = (obj, ar) => {
  console.log("ar got => ", ar);

  const finalObj = ar.reduce((ob, el) => {
    el.date = new Date(el.date);
    return {
      ...ob,
      [el.dateString]: {
        date: new Date(el.date),
        taskList: ar.filter((e) => el.dateString === e.dateString),
      },
    };
  }, {});
  // console.log("final object is ", finalObj);
  return finalObj;
};

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCHED_TASK":
      return arToTasks(state, payload);
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

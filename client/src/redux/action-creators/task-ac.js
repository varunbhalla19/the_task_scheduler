const addTaskAc = (task) => (dispatch) => {
  console.log("addTaskAc called");
  fetch("/tasks", {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((body) => {
      console.log("Response Got ", body);
      body.date = new Date(body.date);
      dispatch({ type: "ADD_TASK", payload: body });
    });
};

const fetchTaskAc = () => (dispatch) => {
  console.log("fetchTaskAc called");
  fetch("/tasks")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      dispatch({
        type: "FETCHED_TASK",
        payload: data,
      });
    });
};

const deleteTaskAc = (id, dateString) => (dispatch) => {
  console.log("deleteTaskAc called");
  fetch(`/tasks/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("post deleted ", data);
      dispatch({ type: "DELETE_TASK", payload: { id, dateString } });
    });
};

export { addTaskAc, fetchTaskAc, deleteTaskAc };

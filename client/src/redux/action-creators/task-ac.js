const addTaskAc = (task) => (dispatch) => {
  console.log("addTaskAc called ", task);
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

const setPinAc = (id, pinnedVal) => (dispatch) => {
  console.log("setPinAc ", id, pinnedVal);
  fetch("/tasks/pin", {
    method: "PUT",
    body: JSON.stringify({
      id,
      pinnedVal,
    }),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Pinned Task ", data);
      dispatch({
        type: "SET_PIN",
        payload: { dateString: data.dateString, id: data._id },
      });
    });
};

const editTaskAc = (id, values) => (dispatch) => {
  console.log("edit task ac", id, values);
  fetch("/tasks", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id, values }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("new Edited Task ", data);
      data.date = new Date(data.date);
      dispatch({ type: "EDIT_TASK", payload: data });
    });
};

export { addTaskAc, fetchTaskAc, deleteTaskAc, setPinAc, editTaskAc };

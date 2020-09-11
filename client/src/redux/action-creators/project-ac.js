const addProjectAc = (project) => (dispatch) => {
  fetch("/project", {
    method: "POST",
    body: JSON.stringify(project),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Got Data ", data);
      dispatch({ type: "ADD_PROJECT", payload: data });
    });
};

const fetchProjectAc = () => (dispatch) => {
  console.log("fetchProjectAc called");
  fetch("/project")
    .then((res) => res.json())
    .then((data) => {
      console.log("fetched projects ", data);
      dispatch({
        type: "FETCHED_PROJECT",
        payload: data,
      });
    });
};

const addSectionTaskAc = (secTask, projId) => (dispatch) => {
  fetch("/secTask", {
    method: "POST",
    body: JSON.stringify({
      secTask,
      projId,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data got, ", data);
      dispatch({
        type: "ADD_SECTIONTASK",
        payload: data.doc,
      });
    });
};

const fetchSectionTaskAc = (projId) => (dispatch) => {
  // console.log("fetchSectionTaskAc ", projId);
  fetch(`/secTask/${projId}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log("sectionTasks are ", data);
      dispatch({
        type: "FETCH_SEC_TASK",
        payload: { sectionTasks: data.sectionTasks, projId: data._id },
      });
    });
};

const setSectionTaskSection = (id, section) => (dispatch) => {
  console.log("setSectionTaskSection ", id, section);
  fetch(`/secTask`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      section,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log("data updated got ", data));
};

const deleteSectionTaskAc = (id, section) => (dispatch) => {
  console.log("deleteSectionTaskAc ", id, section);
  fetch(`/secTask`, {
    method: "DELETE",
    body: JSON.stringify({
      id,
      section,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data deleted ", data);
      dispatch({
        type: "DEL_SEC_TASK",
        payload: { id: data._id, section: data.section },
      });
    });
};

export {
  addProjectAc,
  fetchProjectAc,
  addSectionTaskAc,
  fetchSectionTaskAc,
  setSectionTaskSection,
  deleteSectionTaskAc,
};

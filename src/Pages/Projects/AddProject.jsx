import React, { useState } from "react";

import styled from "styled-components";

import Input from "../../Components/Input/Input";

import { connect } from "react-redux";

const Container = styled.div`
  height: 100%;
  background: #ddd;
  border-radius: 2rem;
  padding: 1rem;
`;

const ADDProject = ({ addProject, addTask }) => {
  const [values, setValues] = useState({
    projectName: "",
    datefrom: null,
    dateto: null,
  });

  const changeInp = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const subDateVal = (name, value) =>
    changeInp(name, new Date(value.split("-").join("/")));

  const dataSubmitted = (ev) => {
    ev.preventDefault();
    values["id"] = String(Date.now());
    console.log(values);
    addProject(values);
    addTask({
      date: values.datefrom,
      task: `${values.projectName} : Start`,
      link: values.id,
      dateString: values.datefrom.toDateString(),
      isProject: true,
      id: String(Date.now() + encodeURI(`${values.projectName} : Start`)),
    });
    addTask({
      date: values.dateto,
      task: `${values.projectName} : End`,
      link: values.id,
      id: String(Date.now() + encodeURI(`${values.projectName} : End`)),
      dateString: values.dateto.toDateString(),
      isProject: true,
    });
  };

  return (
    <Container>
      <h3> Add Project </h3>
      <form onSubmit={dataSubmitted}>
        <Input
          name="projectName"
          type="text"
          placeholder="Add Project"
          inpValue={changeInp}
        />
        <Input name="datefrom" type="date" inpValue={subDateVal} />
        <Input name="dateto" type="date" inpValue={subDateVal} />
        <button type="submit"> Add </button>
      </form>
    </Container>
  );
};

export default connect(null, (dispatch) => ({
  addProject: (project) => dispatch({ type: "ADD_PROJECT", payload: project }),
  addTask: (task) => dispatch({ type: "ADD_TASK", payload: task }),
}))(ADDProject);

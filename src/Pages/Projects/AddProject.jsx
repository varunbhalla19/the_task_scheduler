import React, { useState, useContext } from "react";

import styled from "styled-components";

// import { ShowHideContext } from "../../Context/AddTaskScreen";
//   const { setComponent } = useContext(ShowHideContext);

import Input from "../../Components/Input/Input";

import { ProjectContext } from "../../Context/ProjectProvider";

const Container = styled.div`
  height: 100%;
  background: #ddd;
  border-radius: 2rem;
  padding: 1rem;
`;

export default () => {
  const { addProject } = useContext(ProjectContext);
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
    console.log("Recieved Data ", values);
    values["id"] = String(Date.now());
    addProject(values);
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

import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";

const Input = styled.input`
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid black;
  outline: none;
  border-radius: 0.5rem;
  width: 100%;
  margin: 0.2rem auto;
`;

const InpCover = styled.div`
  width: 80%;
  padding: 0.4rem;
  margin: 0.3rem auto;
  text-align: left;
  font-family: "Montserrat";

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const But = styled.button`
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  background: #282c34;
  color: #b2becd;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

const styles = {
  width: "32px",
  height: "32px",
  margin: "0.25rem",
  display: "inline-block",
};

const colors = {
  "#ff9e9e": "#2e1e1e",
  "#ff9ed2": "#2f1d27",
  "#de97f2": "#332438",
  "#af97f2": "#292338",
  "#97baf2": "#212935",
  "#97e0f2": "#1c282c",
  "#97f2c6": "#253c31",
  "#97f2a1": "#233826",
  "#d2f297": "#3c442c",
  "#f1f297": "#40412a",
  "#f2da97": "#4b442f",
  "#f6d988": "#3a3422",
  "#f6b888": "#473629",
  "#f68888": "#412525",
};

const changeInp = (name, value, values) => ({ ...values, [name]: value });

export const AddScreen = ({ theme, addTask, values, setValues }) => {
  const changeVal = ({ name, value }) =>
    setValues(changeInp(name, value, values));

  const isDarkTheme = theme === "dark";
  const themeBorderColor = isDarkTheme ? "white" : "black";

  return (
    <div
      style={{
        height: "100%",
        padding: "1rem",
      }}
    >
      <h3>Add Task</h3>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const theDate = new Date(values.dateString.replaceAll("-", "/"));
          values["date"] = theDate;
          values["dateString"] = theDate.toDateString();
          console.log(values);
          addTask({ ...values, pinned: false });
          // resetform();
        }}
      >
        <InpCover>
          <Input
            name="task"
            value={values.task}
            onChange={(ev) => changeVal(ev.target)}
            placeholder={"Add Task..."}
          />
        </InpCover>
        <InpCover>
          <Input
            name="descp"
            value={values.descp}
            onChange={(ev) => changeVal(ev.target)}
            placeholder="Description...(Optional)"
          />
        </InpCover>

        <InpCover>
          <label htmlFor="taskDate">Task Date (dd-mm-yyyy) </label>
          <Input
            name="dateString"
            type="date"
            value={values.dateString}
            onChange={(ev) => changeVal(ev.target)}
            id="taskDate"
          />
        </InpCover>
        <InpCover>
          <p style={{ fontSize: "0.9rem", opacity: "0.6" }}>Choose Color:</p>
          {Object.keys(colors).map((col) => (
            <div
              key={col}
              onClick={(ev) => setValues({ ...values, color: col })}
              style={{
                ...styles,
                background: !isDarkTheme ? col : colors[col],
                border:
                  col === values.color
                    ? `3px solid ${themeBorderColor}`
                    : "none",
              }}
            ></div>
          ))}
          <div
            onClick={(ev) => setValues({ ...values, color: "transparent" })}
            style={{
              ...styles,
              background: "transparent",
              border: "1px solid black",
            }}
          ></div>
        </InpCover>
        <InpCover>
          <But> Done </But>
        </InpCover>
      </form>
    </div>
  );
};

export default connect((state) => ({ theme: state.theme }))(AddScreen);

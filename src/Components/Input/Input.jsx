import React from "react";

import styled from "styled-components";

const InputCover = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  width: 70%;
  input {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
  }
`;

const Input = ({ placeholder, inpValue, name, type }) => {
  return (
    <InputCover>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(ev) => inpValue(name, ev.target.value)}
      />
    </InputCover>
  );
};

export default Input;

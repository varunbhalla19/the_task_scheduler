import React from "react";
import styled from 'styled-components';

const TaskContainer = styled.div`
    padding : 1rem 2rem ;
    background : whitesmoke ;
    margin : 0.5rem 0;
    text-align : left ;
    cursor : pointer ;
`
const DateString = styled.p`
    color : #444;
    font-size : 10px ;
`

export default ({ task, dateString }) => (
  <TaskContainer>
    <p> {task} </p>
    <DateString>{dateString}</DateString>
  </TaskContainer>
);

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border-radius: 2rem;
  background: #cde;
`;

const Title = styled.h2`
  margin: 1rem;
`;

const TaskContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow: auto;
  height: 0px;
  border-radius: 0 0 2rem 2rem;
`;

export { Container, Title, TaskContainer } ;
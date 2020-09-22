import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  border-radius: 2rem;
`;
// background: #171e21;
// box-shadow : 0 2px 10px 0px rgba(0,0,0,0.5);

const Title = styled.h2`
  margin: 1rem;
`;

const TitleButtons = styled.h3`
  margin: 1rem;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.3)};
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TaskContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow: auto;
  height: 0px;
  border-radius: 0 0 2rem 2rem;
`;

export { Container, Title, TaskContainer, TitleButtons };

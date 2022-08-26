import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const NewCases: FC<IPros> = ({ children }) => {
  return (
    <NewCasesContainer>
      <h1>NewCases Page</h1>
    </NewCasesContainer>
  );
};

export default NewCases;

const NewCasesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

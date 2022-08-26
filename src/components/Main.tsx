import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const Main: FC<IPros> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

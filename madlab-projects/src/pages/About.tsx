import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const About: FC<IPros> = ({ children }) => {
  return (
    <AboutContainer>
      <h1>About Page</h1>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

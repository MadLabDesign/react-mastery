import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const Schedule: FC<IPros> = ({ children }) => {
  return (
    <ScheduleContainer>
      <h1>Schedule Page</h1>
    </ScheduleContainer>
  );
};

export default Schedule;

const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

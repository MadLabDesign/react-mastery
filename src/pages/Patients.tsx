import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const Patients: FC<IPros> = ({ children }) => {
  return (
    <PatientsContainer>
      <h1>Patients Page</h1>
    </PatientsContainer>
  );
};

export default Patients;

const PatientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

import { FC } from "react";
import styled from "styled-components";

interface IPros {
  children?: React.ReactNode;
}

const Account: FC<IPros> = ({ children }) => {
  return (
    <AccountContainer>
      <h1>Account Page</h1>
    </AccountContainer>
  );
};

export default Account;

const AccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

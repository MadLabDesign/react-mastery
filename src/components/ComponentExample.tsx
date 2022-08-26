import { FC } from 'react';
import styled from 'styled-components';


interface IPros {
}

const ComponentExample: FC<IPros> = () => {
  return (
    <Container>ComponentExample</Container>
  );
};

export default ComponentExample;

const Container = styled.div`
width:100% ;
`
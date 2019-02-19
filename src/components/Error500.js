import React from 'react';
import styled from 'styled-components';

function Error500() {
  return <Container>500 Error</Container>;
}

export default Error500;

const Container = styled.div`
  font-size: 104px;
  height: 30vh;
  padding: 340px 16px 32px 16px;
`;

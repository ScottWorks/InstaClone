import React, { Component } from 'react';
import PhotoBar from '../views/PhotoBar';
import styled from 'styled-components';

class PhotoBarContainer extends Component {
  render() {
    return (
      <Container>
        <PhotoBar />
      </Container>
    );
  }
}

export default PhotoBarContainer;

const Container = styled.div`
  padding: 48px 0px 10px 0px;
`;

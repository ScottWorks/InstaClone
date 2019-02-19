import React from 'react';
import PhotoContainer from '../containers/PhotoContainer';
import styled from 'styled-components';

function PhotoGrid({ activePhotos }) {
  return (
    <Container>
      {activePhotos.map(function(photo) {
        return <PhotoContainer photo={photo} key={photo.id} />;
      })}
    </Container>
  );
}

export default PhotoGrid;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

import React, { Component } from 'react';
import PhotoPreviewContainer from '../containers/PhotoPreviewContainer';
import PhotoOverlay from '../views/PhotoOverlay';
import { Image as Photo } from '../components/Image';
import styled from 'styled-components';

class PhotoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      mouseOver: false
    };
  }

  handleMouseOver = (e) => {
    e.preventDefault();
    const { mouseOver } = this.state;

    this.setState({
      mouseOver: !mouseOver
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { open } = this.state;

    this.setState({
      open: !open
    });
  };

  render() {
    const { open, mouseOver } = this.state;
    // { photo } = this.props;

    return (
      <Container>
        <Photo
          className="photo"
          src={require('../assets/blue-pitbull-puppy.jpg')}
          alt="Photo"
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOver}
          onClick={this.handleClick}
        />
        {mouseOver ? <PhotoOverlay /> : null}
        {open ? <PhotoPreviewContainer photo /> : null}
      </Container>
    );
  }
}

export default PhotoContainer;

const Container = styled.div`
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  width: 280.33px;
  height: 280.33px;
  background-color: #000;

  img {
    transition: transform 500ms ease;
    &:hover {
      opacity: 0.5;
    }
  }
`;

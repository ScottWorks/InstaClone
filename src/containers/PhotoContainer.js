import React, { Component } from 'react';
import PhotoPreviewContainer from '../containers/PhotoPreviewContainer';
import { Icon } from '../components/Icon';
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

    console.log(mouseOver);
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
    const { open } = this.state,
      { photo } = this.props;

    return (
      <Container>
        <Photo
          src={require('../assets/blue-pitbull-puppy.jpg')}
          alt="Photo"
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOver}
          onClick={this.handleClick}
        />
        <Overlay>
          <Icon
            src={require('../assets/icons8-heart-100.png')}
            alt="Like Icon"
            height="24px"
            width="24px"
            margin="0px 8px 0px 0px"
          />
          {photo.likes}
          <Icon
            src={require('../assets/icons8-speech-bubble-filled-100.png')}
            alt="Comment Icon"
            height="20px"
            width="20px"
            margin="0px 8px 0px 32px"
          />
          {photo.comments.length}
        </Overlay>
        {open ? <PhotoPreviewContainer photo /> : null}
      </Container>
    );
  }
}

export default PhotoContainer;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280.33px;
  height: 280.33px;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-weight: 600;
  visibility: hidden;
`;

const Container = styled.div`
  width: 280.33px;
  height: 280.33px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
}

  &:hover ${Overlay} {
  visibility: visible;
  padding: auto;
}
`;

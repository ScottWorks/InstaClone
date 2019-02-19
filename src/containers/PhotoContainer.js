import React, { Component } from 'react';
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

    console.log(open);

    this.setState({
      open: !open
    });
  };

  render() {
    const { open } = this.state,
      { photo } = this.props;

    let tileStyle = {};

    if (open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
      };
    } else {
      tileStyle = {};
    }

    return (
      <Container>
        <Photo
          src={photo.url}
          alt="Photo"
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOver}
          onClick={this.handleClick}
          style={tileStyle}
        />
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

  ${'' /* img {
		width: 100%;
		transition: transform 500ms ease;
		&:hover {
			transform: scale(1.1);
		}
	} */}
`;

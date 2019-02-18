import React from 'react';
import { Icon } from '../components/Icon';
import styled from 'styled-components';

function PhotoBar() {
  return (
    <Container>
      <Link className="active">
        <Icon
          src={require('../assets/icons8-grid-90.png')}
          alt="Posts Icon"
          height="14px"
          width="14px"
          margin="0px 6px 0px 0px"
        />
        POSTS
      </Link>
      <Link>
        <Icon
          src={require('../assets/icons8-retro-tv-100.png')}
          alt="ICTV Icon"
          height="14px"
          width="14px"
          margin="0px 6px 0px 0px"
        />
        IGTV
      </Link>
      <Link>
        <Icon
          src={require('../assets/icons8-bookmark-512.png')}
          alt="Saved Icon"
          height="14px"
          width="14px"
          margin="0px 6px 0px 0px"
        />
        SAVED
      </Link>
      <Link>
        <Icon
          src={require('../assets/icons8-tagged-100.png')}
          alt="Tagged Icon"
          height="14px"
          width="14px"
          margin="0px 6px 0px 0px"
        />
        TAGGED
      </Link>
    </Container>
  );
}

export default PhotoBar;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #efefef;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  height: 52px;
  color: #999;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  margin-right: 60px;
  cursor: pointer;

  &.active {
    border-top: 1px solid #262626;
    color: #262626;
  }
`;

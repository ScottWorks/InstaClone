import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <NavBarContainer>
      <Container>
        <RightContainer>
          <Link to="/">
            <img
              src={require('../assets/icons8-instagram-500.png')}
              alt="Home Icon"
              height="34"
              width="34"
            />
          </Link>
        </RightContainer>
        <CenterContainer>
          <input type="search" value="Search" />
        </CenterContainer>
        <LeftContainer>
          <img
            src={require('../assets/icons8-chat-bubble-100.png')}
            alt="Home Icon"
            height="34"
            width="34"
          />
          <img
            src={require('../assets/icons8-activity-feed-100.png')}
            alt="Home Icon"
            height="34"
            width="34"
          />
          <img
            src={require('../assets/icons8-customer-100.png')}
            alt="Home Icon"
            height="34"
            width="34"
          />
        </LeftContainer>
      </Container>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.nav`
  width: 100%;
  background-color: #fafafa;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 20px;
  max-width: 1010px;
  margin: 0 auto;
`;

const RightContainer = styled.div`
  width: 25%;
  margin: 0;
  text-align: left;
`;
const CenterContainer = styled.div`
  width: 50%;
  margin: 0;
`;
const LeftContainer = styled.div`
  width: 25%;
  margin: 0;
  text-align: right;
`;

export default Header;

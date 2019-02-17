import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import styled from 'styled-components';

function Header() {
  return (
    <NavBarContainer>
      <Container>
        <Section textAlign="left" width="25%">
          <Link to="/">
            <Icon
              src={require('../assets/icons8-instagram-500.png')}
              alt="Home Icon"
              height="24"
              width="24"
              margin="0"
            />
          </Link>
        </Section>
        <Section width="50%">
          <input type="search" value="Search" />
        </Section>
        <Section textAlign="right" width="25%">
          <Icon
            src={require('../assets/icons8-chat-bubble-100.png')}
            alt="Chat Icon"
            height="24"
            width="24"
          />
          <Icon
            src={require('../assets/icons8-activity-feed-100.png')}
            alt="Activity Feed Icon"
            height="24"
            width="24"
          />
          <Icon
            src={require('../assets/icons8-customer-100.png')}
            alt="Profile Icon"
            height="24"
            width="24"
          />
        </Section>
      </Container>
    </NavBarContainer>
  );
}

export default Header;

const NavBarContainer = styled.nav`
  width: 100%;
  background-color: #ffffff;
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

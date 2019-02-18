import React from 'react';
import { Section } from '../components/Section';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Section>
          <Link>ABOUT US</Link>
          <Link>SUPPORT</Link>
          <Link>PRESS</Link>
          <Link>API</Link>
          <Link>JOBS</Link>
          <Link>PRIVACY</Link>
          <Link>TERMS</Link>
          <Link>DIRECTORY</Link>
          <Link>PROFILES</Link>
          <Link>HASHTAGS</Link>
          <Link>LANGUAGE</Link>
        </Section>
        <Section>
          <Copyright>© 2019 INSTCLONE</Copyright>
        </Section>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  padding: 38px 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1010px;
`;

const Link = styled.a`
  color: #003569;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 20px 0px 0px;
`;

const Copyright = styled.div`
  color: #999;
  font-size: 12px;
  font-weight: 600;
`;

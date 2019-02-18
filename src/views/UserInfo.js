import React from 'react';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Image } from '../components/Image';
import { Section } from '../components/Section';
import styled, { css } from 'styled-components';

function Profile(props) {
  const { user } = props;

  return (
    <Container>
      <Section height="150px" width="150px" margin="0px 0px 0px 80px">
        <Image
          circular
          avatar
          src={user.profile_image_url}
          alt="Profile Picture"
        />
      </Section>
      <Section width="450px" margin="0px 0px 0px 80px">
        <Row>
          <Col marginRight="20px" fontWeight="300" fontSize="28px">
            {user.username}
          </Col>
          <Col flex marginRight="10px">
            <Button height="30px" type="button">
              Edit Profile
            </Button>
          </Col>
          <Col flex>
            <Icon
              src={require('../assets/icons8-settings-100.png')}
              alt="Settings Icon"
              height="28px"
              width="28px"
              margin="0"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <b>{user.post_count}</b> posts
          </Col>
          <Col>
            <b>{user.follower_count}</b> followers
          </Col>
          <Col>
            <b>{user.following_count}</b> following
          </Col>
        </Row>
        <Row>
          <Col>
            <b>
              {user.first_name} {user.last_name}
            </b>
          </Col>
        </Row>
      </Section>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Col = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-right: ${(props) => props.marginRight || '40px'};
  margin-bottom: ${(props) => props.marginBottom || '20px'};
  margin-left: ${(props) => props.marginLeft || '0px'};

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-contents: center;
    `};
`;

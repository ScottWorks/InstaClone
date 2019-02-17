import React from 'react';
import { Image } from '../components/Image';
import { Section } from '../components/Section';
import styled from 'styled-components';

function Profile(props) {
  const { user } = props;

  return (
    <Container>
      <Section height="150px" width="150px" margin="0px 0px 0px 80px">
        <Image
          circular
          avatar
          src={user.profile_image_url}
          alt={user.profile_image_url}
        />
      </Section>
      <Section margin="0px 0px 0px 80px">
        <div>
          <h2>{user.username}</h2>
        </div>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
      </Section>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  max-width: 1010px;
  margin: 0 auto;
`;

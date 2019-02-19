import React, { Component } from 'react';
import UserInfo from '../views/UserInfo';
import PhotoGrid from '../views/PhotoGrid';
import PhotoBarContainer from './PhotoBarContainer';
import axios from 'axios';
import styled from 'styled-components';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePhotoGrid: 'posts',
      user: null,
      posts: [],
      saved: [],
      tagged: []
    };
  }

  componentDidMount = () => {
    const { username } = this.props.match.params;

    const userInfo = axios.get(`/api/users/${username}`).catch(function() {
      window.location.assign('/404');
    });

    const images = axios.get(`/api/${username}/images`).catch(function() {
      window.location.assign('/500');
    });

    Promise.all([userInfo, images]).then((response) => {
      this.setState({
        user: response[0].data[0],
        posts: response[1].data
      });
    });

    // asynchrously fetch saved and tagged posts after fetching user info and posts...
  };

  handlePhotoBarChange = () => {
    // updates photo grid according to currrent selection
  };

  render() {
    var activePhotos;
    const { activePhotoGrid, user, posts } = this.state;

    if (activePhotoGrid === 'posts') activePhotos = posts;

    return user ? (
      <Container>
        <Section>
          <UserInfo user={user} />
          <PhotoBarContainer />
          <PhotoGrid activePhotos={activePhotos} />
        </Section>
      </Container>
    ) : null;
  }
}

export default ProfileContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1010px;
  padding: 148px 16px 32px 16px;
`;

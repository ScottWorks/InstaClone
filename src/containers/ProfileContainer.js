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
      user: null
    };
  }

  componentDidMount() {
    const { username } = this.props.match.params;

    axios
      .get(`/api/users/${username}`)
      .then((response) => {
        const { data } = response;
        this.setState({ user: data[0] });
      })
      .catch(() => {
        window.location.assign('/404');
      });
  }

  render() {
    const { user } = this.state;

    return user ? (
      <Container>
        <UserInfo user={user} />
        {/* 
        <PhotoBarContainer />
        <PhotoGrid /> */}
      </Container>
    ) : null;
  }
}

export default ProfileContainer;

const Container = styled.div`
  padding: 148px 16px 32px 16px;
`;

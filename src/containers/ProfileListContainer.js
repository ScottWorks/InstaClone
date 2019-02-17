import React, { Component } from 'react';
import ProfileList from '../views/ProfileList';
import axios from 'axios';
import styled from 'styled-components';

class ProfileListContainer extends Component {
  constructor() {
    super();

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    axios
      .get('/api/users')
      .then((response) => {
        const { data } = response;
        this.setState({ users: data });
      })
      .catch(() => {
        window.location.assign('/404');
      });
  }

  render() {
    const { users } = this.state;

    return users ? (
      <Container>
        <ProfileList {...this.state} />
      </Container>
    ) : null;
  }
}

export default ProfileListContainer;

const Container = styled.div`
  padding: 148px 16px 32px 16px;
`;

import React, { Component } from 'react';
import ProfileList from '../views/ProfileList';
import axios from 'axios';

class ProfileListContainer extends Component {
  constructor() {
    super();

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((response) => {
      const { data } = response;
      this.setState({ users: data });
    });
  }

  render() {
    const { users } = this.state;

    return users ? <ProfileList {...this.state} /> : null;
  }
}

export default ProfileListContainer;

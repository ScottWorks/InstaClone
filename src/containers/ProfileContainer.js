import React, { Component } from 'react';
import Profile from '../views/Profile';
import axios from 'axios';

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

    return user ? <Profile user={user} /> : null;
  }
}

export default ProfileContainer;

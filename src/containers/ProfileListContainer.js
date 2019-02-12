import React, { Component } from 'react';
import ProfileList from '../views/ProfileList';

class ProfileListContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return <ProfileList {...this.props} />;
  }
}

export default ProfileListContainer;

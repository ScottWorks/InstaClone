import React from 'react';

function Profile(props) {
  const { user } = props;

  return (
    <div>
      <img src={user.profile_image_url} alt={user.profile_image_url} />
      <h2>Username: {user.username}</h2>
      <h2>
        Name: {user.first_name} {user.last_name}
      </h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
}

export default Profile;

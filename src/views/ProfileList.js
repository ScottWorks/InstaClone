import React from 'react';
import { Link } from 'react-router-dom';

function ProfileList(props) {
  const { users } = props;

  return (
    <div>
      {users.map((user, idx) => {
        return (
          <Link key={idx} to={`/users/${user.id}`}>
            <img src={user.profile_image_url} alt={user.profile_image_url} />
            <h2>{user.username}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default ProfileList;

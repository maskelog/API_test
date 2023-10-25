import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Account Name: {user.accountname}</p>
      <p>Intro: {user.intro}</p>
      <img src={user.image} alt="User" />
    </div>
  );
}

export default Profile;
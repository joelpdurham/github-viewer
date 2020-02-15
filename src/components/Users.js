import React from 'react';
import { useSelector } from 'react-redux';
import { fetchUserInfoFromState } from '../selectors/userSelectors';

export const User = () => {
  const user = useSelector(fetchUserInfoFromState);

  return (
    <>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} />
      <p>Location: {user.location} - Repos: {user.public_repos}</p>
      <p>{user.bio}</p>
    </>
  );
};

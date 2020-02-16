import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUser, toGetLoading } from '../selectors/userSelectors';
import { Loading } from './Loading';

export const User = () => {
  const user = useSelector(toGetUser);
  const loading = useSelector(toGetLoading);

  if(loading) return <Loading />;

  const render = user ? 
    (<>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} />
      <a href={user.html_url} target='blank' >Visit</a>
      <p>Location: {user.location} - Repos: {user.public_repos}</p>
      <p>{user.bio}</p>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
    </>) : <img src='https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' />;

  return (
    <>
      {render}
    </>
  );
};

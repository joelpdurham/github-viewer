import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUser, toGetLoading } from '../selectors/userSelectors';
import { Loading } from './Loading';

export const User = () => {
  const user = useSelector(toGetUser);
  const loading = useSelector(toGetLoading);

  if(loading) return <Loading />;

  const render = user ? (
    <>
      <a href={user.html_url} target='blank'><h1 >{user.name}</h1></a>
      <img src={user.avatar_url} />
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Repos: {user.public_repos}</p>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
    </>) : (
    <>
      <h1>Github</h1>
      <img src='https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' />
      <p>Bio: </p>
      <p>Location: </p>
      <p>Repos: </p>
      <p>Following: </p>
      <p>Followers: </p>
    </>
  );

  return (
    <>
      {render}
    </>
  );
};

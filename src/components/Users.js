import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUser, toGetLoading, toGetRepos } from '../selectors/userSelectors';
import { Loading } from './Loading';
import { useFetchRepos } from '../hooks/useFetchRepos';

export const User = () => {
  const user = useSelector(toGetUser);
  const repos = useSelector(toGetRepos);
  const loading = useSelector(toGetLoading);
  const { handleClick } = useFetchRepos();

  if(loading) return <Loading />;

  const renderRepos = repos ? (<h5>We have Repos!</h5>) : (<></>);

  const render = user ? (
    <>
      <a href={user.html_url} target='blank'><h1 >{user.name}</h1></a>
      <img src={user.avatar_url} />
      <p>Bio: {user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
      <p onClick={handleClick}>Repos: {user.public_repos}</p>
      {renderRepos}
    </>) : (
    <>
      <h1>Github</h1>
      <img src='https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' />
      <p>Bio: </p>
      <p>Location: </p>
      <p>Following: </p>
      <p>Followers: </p>
      <p>Repos: </p>
    </>
  );

  return (
    <>
      {render}
    </>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { toGetUser } from '../selectors/userSelectors';
import { useFetchRepos } from '../hooks/useFetchRepos';

export const User = () => {
  const user = useSelector(toGetUser); 
  const { showRepos, hideRepos, repoElements, repoView } = useFetchRepos();

  const renderRepos = repoView ? (
    <ul>
      <button onClick={hideRepos}>Hide Repos</button>
      {repoElements}
      <button onClick={hideRepos}>Hide Repos</button>
    </ul>) : 
    (<button onClick={showRepos}>Click to see Repos</button>);

  const render = user ? (
    <div>
      <a href={user.html_url} target='blank'><h1>{user.name}</h1></a>
      <img src={user.avatar_url} />
      <div>
        <p>Bio: {user.bio}</p>
        <p>Location: {user.location}</p>
        <p>Following: {user.following}</p>
        <p>Followers: {user.followers}</p>
        <p>Repos: {user.public_repos}</p>
        {renderRepos}
      </div>    
    </div>) : (
    <div>
      <h1>Github</h1>
      <img src='https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512' />
      <div>
        <p>Bio: </p>
        <p>Location: </p>
        <p>Following: </p>
        <p>Followers: </p>
        <p>Repos: </p>
      </div>
    </div>
  );

  return (
    <>
      {render}
    </>
  );
};

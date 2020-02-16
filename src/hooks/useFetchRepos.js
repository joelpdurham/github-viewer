import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../actions/actions';
import { toGetUser, toGetRepos } from '../selectors/userSelectors';

export const useFetchRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(toGetUser);
  const repos = useSelector(toGetRepos);
  const [repoView, setRepoView] = useState(false);
  
  const showRepos = () => {
    setRepoView(true);
    dispatch(fetchRepos(user.login));
  };

  const hideRepos = () => {
    setRepoView(false);
  };

  const repoElements = repos ? repos.map(repo => (
    <li key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
    </li>
  )) : (<></>);

  return { showRepos, hideRepos, repoElements, repos, repoView };
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, turnRepoViewOn, turnRepoViewOff } from '../actions/actions';
import { toGetUser, toGetRepos } from '../selectors/userSelectors';

export const useFetchRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(toGetUser);
  const repos = useSelector(toGetRepos);

  const showRepos = () => {
    if(!repos) dispatch(fetchRepos(user.login));
    dispatch(turnRepoViewOn());
  };

  const hideRepos = () => {
    dispatch(turnRepoViewOff());
  };

  const repoElements = repos ? repos.map(repo => (
    <li key={repo.id}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
    </li>
  )) : (<></>);

  return { showRepos, hideRepos, repoElements, repos };
};

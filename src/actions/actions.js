import { getUser, getRepos } from '../services/getUser';
import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_REPOS = 'FETCH_REPOS';
export const RESET_REPOS = 'RESET_REPOS';
export const REPOVIEW_ON = 'REPOVIEW_ON';
export const REPOVIEW_OFF = 'REPOVIEW_OFF';

export const turnRepoViewOn = () => ({ type: REPOVIEW_ON });
export const turnRepoViewOff = () => ({ type: REPOVIEW_OFF });

export const fetchUser = userName => dispatch => {
  dispatch(turnLoadingOn());
  dispatch(turnRepoViewOff());
  return getUser(userName)
    .then(user => {
      dispatch(turnLoadingOff());
      dispatch({ type: RESET_REPOS });
      return dispatch({
        type: FETCH_USER,
        payload: user
      });
    });
};

export const fetchRepos = userName => dispatch => {
  dispatch(turnLoadingOn());
  return getRepos(userName)
    .then(repos => {
      dispatch(turnLoadingOff());
      return dispatch({
        type: FETCH_REPOS,
        payload: repos
      });
    });
};

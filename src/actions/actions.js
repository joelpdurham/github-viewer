import { getUser, getRepos } from '../services/getUser';
import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_REPOS = 'FETCH_REPOS';

export const fetchUser = userName => dispatch => {
  dispatch(turnLoadingOn());
  return getUser(userName)
    .then(user => {
      dispatch(turnLoadingOff());
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

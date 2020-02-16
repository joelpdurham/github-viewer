import { getUser } from '../services/getUser';
import { turnLoadingOn, turnLoadingOff } from './loadingActions';

export const FETCH_USER = 'FETCH_USER';

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

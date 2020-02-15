import { getUser } from '../services/getUser';

export const FETCH_USER = 'FETCH_USER';
export const LOADING_ON = 'LOADING_ON';
export const LOADING_OFF = 'LOADING_OFF';

export const fetchUser = userName => dispatch => {
  return getUser(userName)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};

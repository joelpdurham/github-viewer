import { FETCH_USER, FETCH_REPOS, RESET_REPOS } from '../actions/actions';

const initialState = {
  userInfo : null,
  repos: null
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_REPOS:
      return { ...state, repos: action.payload };
    case RESET_REPOS:
      return { ...state, repos: null };
    default: 
      return state;
  }
};

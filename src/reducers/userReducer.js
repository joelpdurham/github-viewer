import { FETCH_USER, FETCH_REPOS, RESET_REPOS, REPOVIEW_ON, REPOVIEW_OFF } from '../actions/actions';

const initialState = {
  userInfo : null,
  repos: null,
  repoView: false
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_REPOS:
      return { ...state, repos: action.payload };
    case RESET_REPOS:
      return { ...state, repos: null };
    case REPOVIEW_ON:
      return { ...state, repoView: true };
    case REPOVIEW_OFF:
      return { ...state, repoView: false };
    default: 
      return state;
  }
};

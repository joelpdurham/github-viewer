import { FETCH_USER, FETCH_REPOS } from '../actions/actions';

const initialState = {
  userInfo : null
};

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_REPOS:
      return { ...state, repos: action.payload };
    default: 
      return state;
  }
};

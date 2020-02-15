import { FETCH_USER } from "../actions/actions";

export const reducer = (state = intialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    default: 
      return state;
  }
}
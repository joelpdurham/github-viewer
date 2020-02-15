import { FETCH_USER } from '../actions/actions';

const initialState = {
  userInfo : {
    id: '',
    name: ''
  }
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    default: 
      return state;
  }
};

import { CHANGE_INPUT } from '../actions/actions';

const initialState = {

};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INPUT:
      return { ...state, searchTerm: action.payload };
  }

  return state;
};

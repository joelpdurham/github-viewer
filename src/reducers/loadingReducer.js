import { LOADING_ON, LOADING_OFF } from '../actions/actions';

const initialState = {
  loading: null
};

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_ON:
      return { ...state, loading: true };
    case LOADING_OFF:
      return { ...state, loading: false };
    default:
      return state;
  }
};

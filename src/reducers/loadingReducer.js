import { LOADING_ON } from '../actions/actions';


export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING_ON:
      return { ...state, loading: true };
    default:
      return state;
  }
}
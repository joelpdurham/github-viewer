import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  reducer,
  loadingReducer
});

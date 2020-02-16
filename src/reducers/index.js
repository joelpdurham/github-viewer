import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';

export default combineReducers({
  userReducer,
  loadingReducer
});

import { combineReducers } from 'redux';
// Reducer imports
import appReducer from './app';

// Combining and exporting the reducers
export default combineReducers({
  app: appReducer,
});
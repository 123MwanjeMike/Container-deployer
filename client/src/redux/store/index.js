import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(appReducer, initialState, applyMiddleware(thunk));
  return store;
};

const initialState = {};

const store = configureStore(initialState);

export default store;

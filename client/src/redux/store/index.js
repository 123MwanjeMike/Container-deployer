import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist5';
import storage from 'redux-persist5/lib/storage';
import autoMergeLevel1 from 'redux-persist5/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers';

console.log(rootReducer)

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(thunk)),
  );

  return store;
};

const initialState = {};

const store = configureStore(initialState);

export default store;

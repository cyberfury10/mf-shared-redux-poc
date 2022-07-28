import { applyMiddleware, createStore, compose, combineReducers } from 'redux'

import { counterReducer } from "./counterReducer";
import { nameReducer } from "./nameReducer";

import thunkMiddleware from 'redux-thunk'

const staticReducers = {
  counter: counterReducer,
  name: nameReducer,
};

let composeEnhancers = compose
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'app1',
  })
}
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));

  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}

export const store = configureStore();

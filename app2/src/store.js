import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunkMiddleware from "redux-thunk"

import { nameReducer } from "./nameReducer"
let composeEnhancers = compose
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'app2',
  })
}

const rootReducer = combineReducers({
  name: nameReducer,
})

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))



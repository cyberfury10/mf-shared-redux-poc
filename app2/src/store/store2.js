import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunkMiddleware from "redux-thunk"

import { nameReducer } from "./name/name-reducer"
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'app2',
}) || compose

const rootReducer = combineReducers({
  nameApp2: nameReducer,
})

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))



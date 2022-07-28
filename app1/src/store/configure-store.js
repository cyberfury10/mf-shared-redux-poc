import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

let composeEnhancers = compose
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'app1',
  })
}
const configureStore = (initialState = {}) =>
  createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default configureStore

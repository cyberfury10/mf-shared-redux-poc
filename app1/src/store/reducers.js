import { combineReducers } from "redux"
import { nameReducer } from "./name/name-reducer"
const reducers = {
  nameApp1: nameReducer,
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer

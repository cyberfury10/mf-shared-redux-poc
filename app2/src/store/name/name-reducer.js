import * as constants from "./name-constants"

const initialState = {
  name: "",
}
export function nameReducer(state = initialState, { type, data }) {
  switch (type) {
    case constants.UPDATE_TEXT:
      return { ...state, name: data }
    default:
      return state
  }
}

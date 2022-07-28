import * as constants from "./name-constants"
const acytion = (text) => {
  return { type: constants.UPDATE_TEXT, data: text }
}
export const updateName = (text) => async (dispatch) => {
  await dispatch(acytion(text))
}

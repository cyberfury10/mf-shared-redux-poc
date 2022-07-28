import * as R from "ramda"

export const getName = () => {
  return R.path(["name"])
}

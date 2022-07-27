export function nameReducer(state = "George", action) {
    switch (action.type) {
      case "NAME_CHANGE_APP2":
        return action.payload;
      default:
        return state;
    }
  }
  
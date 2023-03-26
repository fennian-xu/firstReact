import * as types from "../actionTypes";
export default function filter(state = "all", action) {
  if (action.type === types.STATECHANGE) {
    return action.payload;
  }
  return state;
}

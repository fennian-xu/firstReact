// 写 获取token reducer
// 初始状态
import * as types from "../actionTypes";
const initialState = {
  token: 1111,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GETLOGIN:
      return { ...state, token: (state.token = action.payload) };
    default:
      return state;
  }
}

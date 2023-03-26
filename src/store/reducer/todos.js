// 定义初始状态
import * as types from "../actionTypes";
const initState = [
  { id: 1, text: "吃饭", done: true },
  { id: 2, text: "学习", done: false },
  { id: 3, text: "睡觉", done: true },
];
export default function todos(state = initState, action) {
  switch (action.type) {
    // 删除
    case types.TODOS:
      return state.filter((item) => item.id !== action.payload);
    // 切换状态
    case types.TOGGLETODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    // 添加代办项
    case types.ADDITEM:
      return [
        { id: ~~(Math.random() * 10000), text: action.payload, done: false },
        ...state,
      ];
    // 全选反选
    case types.TOOGLEALL:
      return state.map((item) => {
        return { ...item, done: action.payload };
      });
    // 清除已完成
    case types.CLEARDONE:
      return state.filter((item) => !item.done);
    // 修改代办项
    case types.UPDATETODO:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            text: action.payload.text,
          };
        }
        return item;
      });
    default:
      return state;
  }
}

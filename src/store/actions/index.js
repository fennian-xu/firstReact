import * as types from "../actionTypes";
// 添加action
export const increment = (payload) => {
  return {
    type: types.INCERMENT,
    payload,
  };
};
// 减去action
export const decrement = (payload) => {
  return {
    type: types.DECERMENT,
    payload,
  };
};

//登录的一个action
export const login = (payload) => {
  return {
    type: types.GETLOGIN,
    payload,
  };
};

// todoList的action 删除
export const delItem = (payload) => {
  return {
    type: types.TODOS,
    payload,
  };
};

// 切换状态
export const toggleState = (payload) => {
  return { type: types.TOGGLETODO, payload };
};

// 添加代办项
export const addItem = (payload) => {
  return { type: types.ADDITEM, payload };
};

// 全选反选
export const toggleAll = (payload) => {
  return { type: types.TOOGLEALL, payload };
};
// 清除已完成item
export const clreaDone = (payload) => {
  return { type: types.CLEARDONE, payload };
};

// 修改代办项
export const updateTodoName = (payload) => {
  return {
    type: types.UPDATETODO,
    payload,
  };
};

// 根据状态更新列表
export const changeState = (payload) => {
  return {
    type: types.STATECHANGE,
    payload,
  };
};

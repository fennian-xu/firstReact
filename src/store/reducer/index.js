import { combineReducers } from "redux";
import counter from "./counter";
import login from "./login";
import todos from "./todos";
import filter from "./filter";
export default combineReducers({ counter, login, todos, filter });
// 当前reducer的层级 是降了一级 当前结构 state：{ count:0,... }

import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { delItem, toggleState, updateTodoName } from "../../store/actions";
export const TodoItem = ({ id, text, done }) => {
  // 控制input框显示
  const [inpShow, setInpShow] = useState(false);
  // 将输入框的值 作为初始值 受控
  const [todoName, settodoName] = useState(text);
  // 创建ref
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  // 在页面渲染完成 并且当输入框显示时自动聚焦
  useEffect(() => {
    if (inpShow) {
      inputRef.current.focus();
    }
  }, [inpShow]);
  const updateTodo = (e) => {
    if (e.keyCode !== 13) return;
    if (todoName.trim() === "") return;
    // 存入redux  这个时候传入的就是修改后的值
    dispatch(updateTodoName({ id, text: todoName.trim() }));
    settodoName("");
    setInpShow(false);
  };
  return (
    <li
      className={classNames({
        completed: done,
        editing: inpShow,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          onChange={() => {
            dispatch(toggleState(id));
          }}
          type="checkbox"
          checked={done}
        />
        <label onDoubleClick={() => setInpShow(true)}>{text}</label>
        <button
          className="destroy"
          onClick={() => dispatch(delItem(id))}
        ></button>
      </div>
      <input
        onKeyDown={updateTodo}
        onChange={(e) => settodoName(e.target.value)}
        onBlur={() => setInpShow(false)}
        value={todoName}
        ref={inputRef}
        className="edit"
      />
    </li>
  );
};

// 做删除 首先事件点击去触发
// dispatch 触发action
// 那就先写一个action 需要去统一名称

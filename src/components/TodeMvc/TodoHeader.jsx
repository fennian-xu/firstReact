import { useRef } from "react"; // 非受控组件
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../../store/actions";
export const TodoHeader = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // const inputRef = useRef(null)
  // const addTodoItem = (e) => {
  //   if (e.keyCode === 13) {
  //     // 获取输入框的值
  //     const inputValue = inputRef.current.value.trim()
  //     if(!inputValue) return
  //     dispatch(addItem(inputValue))
  //     inputRef.current.value = ''
  //   }
  // }
  // 非受控组件写法
  const addTodoItem = (e) => {
    if (e.keyCode !== 13) return;
    if (text.trim() === "") return;
    dispatch(addItem(text));
    setText("");
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={addTodoItem}
      />
    </header>
  );
};

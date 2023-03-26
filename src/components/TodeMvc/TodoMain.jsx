import { TodoItem } from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { toggleAll } from "../../store/actions";
export const TodoMain = () => {
  const dispatch = useDispatch();
  let todoList = useSelector((state) => state.todos);
  // 获取到列表不同状态
  const status = useSelector((state) => state.filter);
  // 处理列表数据
  if (status === "active") {
    todoList = todoList.filter((item) => !item.done);
  } else if (status === "completed") {
    todoList = todoList.filter((item) => item.done);
  }
  // 拿到全选按钮的状态
  const checkedAll = todoList.every((item) => item.done);
  return (
    <section className="main">
      <input
        id="toggle-all"
        checked={checkedAll}
        onChange={(e) => dispatch(toggleAll(e.target.checked))}
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((item) => (
          <TodoItem key={item.id} {...item}></TodoItem>
        ))}
      </ul>
    </section>
  );
};

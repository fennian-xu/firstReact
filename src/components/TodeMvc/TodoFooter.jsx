import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clreaDone, changeState } from "../../store/actions";
import classNames from "classnames";
export const TodoFooter = () => {
  const dispatch = useDispatch();
  // 拿到未完成数量
  const itemLeftLength = useSelector((state) => state.todos).filter(
    (item) => !item.done
  ).length;
  // 找到是否有完成项  只要有一项就显示清除按钮
  const showBtn = useSelector((state) => state.todos).some((item) => item.done);
  // 获取是否完成状态
  const filter = useSelector((state) => state.filter);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeftLength}</strong> item left
      </span>
      <ul className="filters">
        <li onClick={() => dispatch(changeState("all"))}>
          <a className={classNames({ selected: filter === "all" })} href="#/">
            All
          </a>
        </li>
        <li onClick={() => dispatch(changeState("active"))}>
          <a
            className={classNames({ selected: filter === "active" })}
            href="#/active"
          >
            Active
          </a>
        </li>
        <li onClick={() => dispatch(changeState("completed"))}>
          <a
            className={classNames({ selected: filter === "completed" })}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      {showBtn && (
        <button
          onClick={() => {
            dispatch(clreaDone());
          }}
          className="clear-completed"
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

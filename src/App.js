// import './App.css';
// import { useSelector,useDispatch } from 'react-redux'
// // 引入store 通过store.dispatch派发action
// import store from './store';
// // 引入action
// import { increment,decrement,login} from './store/actions';
// function App() {
//   // 通过useSelector 获取状态值
//   const count = useSelector((state) => {
//     console.log(state,'里面是什么');
//     return state.counter.count
//   })
//   const token = useSelector((state) => {
//     console.log(state, 'token');
//     return state.login.token
//   })
//   // 创建dispatch
//   const dispatch = useDispatch()
//   return (
//     <div className="App">
//       {/* 数值加减 */}
//         <p>数值：{count}</p>
//       <button onClick={() => store.dispatch(increment(1))}>数值加1(原始方法)</button>
//       <button onClick={() => store.dispatch(decrement(1))}>数值减1(原始方法)</button>
//       <button onClick={() => dispatch(increment(1))}>数值加1(useDispatch)</button>
//       <button onClick={() => dispatch(decrement(1))}>数值减1(useDispatch)</button>
//       <p>token:{token }</p>
//       <button onClick={()=>dispatch(login(1223234234))}>改变token值</button>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import { TodoFooter } from './components/TodeMvc/TodoFooter';
import { TodoHeader } from './components/TodeMvc/TodoHeader';
import { TodoMain } from './components/TodeMvc/TodoMain';
import './index.css'
export default class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader></TodoHeader>
        <TodoMain></TodoMain>
        <TodoFooter></TodoFooter>
      </section>
    );
  }
}

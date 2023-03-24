import { useState } from "react";
import Context from "../Context/context";
import { Child } from "./Child";
export const Parent = () => {
    const [count,setCount] = useState(0)
    return (
        <Context.Provider value={count}>
            <p>这个是根组件：{count}</p>
            <button onClick={() => setCount(count + 1)}>点击+1</button>
            <Child></Child>
        </Context.Provider>
    )
}

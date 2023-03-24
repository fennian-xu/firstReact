// useRef 特性 获取上一次的状态值
// 在react hook中 需要记住某个属性或数据 只能用useRef
import { useState } from "react"
import { usePrevState } from "../Hooks/prevHooks"
export const PrevState = () => {
    const [count, SetCount] = useState(0)
    const value = usePrevState(count)
    // console.log(value);
    return <div>
        <p>状态值:{count }</p>
        <button onClick={() => SetCount(count + 1)}>改变状态+1</button>

    </div>
}
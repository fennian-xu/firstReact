
// 自定义Hook实现 返回上一次的状态值 利用useRef的特性
import { useEffect, useRef } from "react"
 export const usePrevState = (state) => {
    // 传入的state作为初始值
    const currentRef = useRef(state)
    useEffect(() => {
        currentRef.current = state
    }, [state])
    return currentRef.current
}

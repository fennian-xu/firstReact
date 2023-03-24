// useRef 练习
import { useEffect, useRef } from "react"
export const InputRef = () => {
    const getRef = useRef(null)
    // 页面初始化时聚焦
    useEffect(() => {
        getRef.current.focus()
    },[])
    const getInputValue = () => {
        console.log(getRef.current.value, '输入框的值');
        
    }
    return <div>
        <input ref={getRef} type="text" />
        <button onClick={getInputValue}>点击获取输入值</button>
    </div>
}
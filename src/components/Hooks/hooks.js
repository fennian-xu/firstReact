// 自定义hooks
// 必须以use开头
import { useState, useEffect } from "react";
const useMoues = () => {
    const [point, setPoint] = useState({ x: 0, y: 0 })
    const moveCallBack = (e) => {
           setPoint({x:e.pageX,y:e.pageY})
        } 
    // 移动事件是副作用 写在useEffect中
    useEffect(() => {
        document.addEventListener("mousemove", moveCallBack)
        return () => {
            document.removeEventListener("mousemove",moveCallBack)
        }
    }, [])
    return point
}
export default useMoues
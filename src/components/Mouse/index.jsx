import { useState, useEffect } from "react"
import useMoues from "../Hooks/hooks"
export const Mouse = () => {
    const mouseObj = useMoues()
    // console.log(mouseObj,"自定义hook返回得值");
    // const [point, setPoint] = useState({ x: 0, y: 0 })
    // const moveCallback = (e) => {
    //     setPoint({x:e.pageX,y:e.pageY})
    // }
    // 监听鼠标移动事件
    // useEffect(() => {
    //     document.addEventListener("mousemove", moveCallback)
    //     // 清除副作用
    //     return () => {
    //     document.removeEventListener("mousemove",moveCallback)
    //     }
    // }, [])
    return <div>
        当前鼠标得坐标是：
        <p>x轴坐标：{mouseObj.x}</p>
        <p>y轴坐标：{mouseObj.y}</p>
    </div>
}
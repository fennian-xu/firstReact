import { useContext } from "react"
import Context from "../Context/context"


export const Child = () => {
    return <GreadChild></GreadChild>
}

const GreadChild = () => {
    const count = useContext(Context)
    return <div>
        <Context.Consumer>{(value) => {
            return <p>这里是孙子组件拿到的值(原始方式 ):{ value }</p>
        } }</Context.Consumer>
        <p>这里是孙子组件（通过useContext）：{count}</p>
        </div>
}
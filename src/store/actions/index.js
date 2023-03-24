import * as types from '../actionTypes'
// 添加action
export const increment = (payload) => {
    return {
        type: types.INCERMENT,
        payload
    }
}
// 减去action
export const decrement = (payload) => {
    return{
        type: types.DECERMENT,
        payload
    }
}
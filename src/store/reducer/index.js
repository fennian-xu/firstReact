import * as types from '../actionTypes'
const inital = {
    count:0,
}
export default function reducer(state = inital, action) {
    switch (action.type) {
        case types.INCERMENT:
            return { ...state, count: state.count + action.payload }   
        case types.DECERMENT:
            return {...state, count: state.count - action.payload}
        default:
            return state
    }
}
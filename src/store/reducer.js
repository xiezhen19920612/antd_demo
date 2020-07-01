import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'
const defaultState = {
    inputVal : "foo bar",
    lists:[
        '吃饭',
        '睡觉',
        'heheda',
        '打豆豆'
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = ""
        newState.lists.push(action.value)
        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.idx, 1)
        return newState
    }
    
    return state
}
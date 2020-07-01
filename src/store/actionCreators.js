import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = (value) => ({
    type: ADD_ITEM,
    value
})

export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
})
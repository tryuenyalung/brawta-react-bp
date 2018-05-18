/**
 * reducers can only do sync code,
 * if you want to do asyn code add middlwares
 */
import {INCREMENT} from './../actions/increment'
import {Map} from 'immutable'

//create immutable collection
const initialState = Map({
    counter : 0
})


//plain object
const actionsMap = {
    /**
     * constant key from actions,
     * function as value
     * 'INCREMENT' : someFunction
     */
    [INCREMENT]: (state) => {
        console.log("i was on increment ")
        //get counter key on Map
        const counter = state.get('counter') + 1
        const name = 'yuen'
        //return a new Map (immutable js map.merge)
        return state.merge(Map({ counter, name }))
    },
    'FIRST' : (state) => {
        console.log("i was on first")
    },

    'SECOND': (state) => {
        console.log("i was on second ")
        return state
    }
}

/**
 * from components dispatch the actions ->
 * then it will fall to the reducer
 * returning an object that has 
 * an action, the reducer then 
 * triggers the function
 */
//put initial value to parameter (state, action)
export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type]
    /**
     * check if actionsMap[someValue] returns anything,
     *  if not return initial state
     */
    return fn ? fn(state, action) : state
}
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
        //get counter key on Map
        const counter = state.get('counter') + 1
        //return a new Map
        return state.merge(Map({ counter }))
    }
}

//put initial value to parameter (state, action)
export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type]
    /**
     * check if actionsMap[someValue] returns anything,
     *  if not return initial state
     */
    return fn ? fn(state, action) : state
}
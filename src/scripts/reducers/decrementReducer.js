import {DECREMENT} from './../actions/decrement'
import {Map} from 'immutable'

const initialState = Map({
    counter : 20
})

const actionsMap = {
    [DECREMENT]: (state) => {
        const counter = state.get('counter') - 1
        return state.merge(Map({ counter }))
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type]
    return fn ? fn(state, action) : state
}
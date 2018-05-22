import {Map} from 'immutable'
import { API_GET_SUCCESS, 
        API_GET_ONE_SUCCESS,
        API_POST_SUCCESS,
        API_PUT_SUCCESS,
        API_PENDING,
        API_ERROR} from './../actions/api'




const initialState = Map({
    loading: true,
    error: null,
    data: null
})


const actionsMap = {
    // Async action
    [API_PENDING]: (state) => {
        return state.merge(Map({
            loading: true,
            error: null,
            data: null
        }))
    },

    [API_GET_SUCCESS]: (state, action) => {
        return state.merge(Map({
            loading: false,
            data: action.data
        }))
    },

    [API_POST_SUCCESS]: (state, action) => {
        return state.merge(Map({
            loading: false,
            data:  state.data
        }))
    },

    // [API_PUT_SUCCESS]: (state, action) => {
    //     return state.merge(Map({
    //         loading: false,
    //         data: data.set( JSON.stringify(action.data) )
    //     }))
    // },

    [API_ERROR]: (state, action) => {
        return state.merge(Map({
            loading: false,
            error: action.error
        }))
    }


}

//export reducer
export default (state = initialState, action = {}) => {
    const fn = actionsMap[action.type]
    return fn ? fn(state, action) : state
}
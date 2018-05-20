import {GET_POST_PENDING,GET_POST_SUCCESS,GET_POST_ERROR} from './../../actions/post/get_post'

import {Map} from 'immutable'


const initialState = Map({
    loading: true,
    error: null,
    post: null
})


const actionsMap = {
    // Async action
    [GET_POST_PENDING]: (state) => {
        console.log("inside pending")
        return state.merge(Map({
            loading: true,
            error: null,
            post: null
        }))

    },

    [GET_POST_SUCCESS]: (state, action) => {
        console.log("inside success")
        return state.merge(Map({
            loading: false,
            post: action.data
        }))

    },

    [GET_POST_ERROR]: (state, action) => {
        console.log("inside error")

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
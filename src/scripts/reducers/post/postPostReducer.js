import {POST_POST_PENDING,POST_POST_SUCCESS,POST_POST_ERROR} from './../../actions/post/post_post'

import {Map} from 'immutable'


const initialState = Map({
    loading: true,
    error: null,
    post: null
})


const actionsMap = {
    // Async action
    [POST_POST_PENDING]: (state) => {
        console.log("inside pending")
        return state.merge(Map({
            loading: true,
            error: null,
            post: null
        }))

    },

    [POST_POST_SUCCESS]: (state, action) => {
        console.log("inside success")
        return state.merge(Map({
            loading: false,
            post: post.set( JSON.stringify(action.data) )
        }))

    },

    [POST_POST_ERROR]: (state, action) => {
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
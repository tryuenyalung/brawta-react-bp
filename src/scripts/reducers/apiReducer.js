import {Map} from 'immutable'
import { API_GET_SUCCESS, 
        API_GET_ONE_SUCCESS,
        API_POST_SUCCESS,
        API_PUT_SUCCESS,
        API_DELETE_SUCCESS,
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
            error: null
        }))
    },

    [API_GET_SUCCESS]: (state, action) => {
        console.log(action.data);
        return state.merge(Map({
            loading: false,
            data: action.data
        }))
    },

    [API_POST_SUCCESS]: (state, action) => {

        let newData = state.get('data')
        newData.push(action.data)

        return state.merge(Map({
            loading: false,
            data: newData
        }))
    },

    [API_PUT_SUCCESS]: (state, action) => {
        const newData = state.get('data')
        const arrayIndex = newData.findIndex(x => x.id === action.data.id)
        //update object on array
        newData.splice(arrayIndex, 1, action.data)
        
        return state.merge(Map({
            loading: false,
            data: newData,
            error: null
        }))
    },

    [API_DELETE_SUCCESS]: (state, action) => {
        const stateData = state.get('data')
        const newData = stateData.filter(x => x.id !== action.id)
        return  Map({
            loading: false,
            data: newData,
            error: null
        })
    },

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
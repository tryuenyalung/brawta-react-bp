import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import incrementReducer from './incrementReducer'
import decrementReducer from './decrementReducer'
import getPostReducer from './post/getPostReducer'
import apiReducer from './apiReducer'

export default combineReducers({
    form: formReducer,
    apiReducer : apiReducer,
    incrementReducer : incrementReducer,
    decrementReducer: decrementReducer,
    getPostReducer: getPostReducer
})

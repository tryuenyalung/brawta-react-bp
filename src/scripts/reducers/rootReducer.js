import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import incrementReducer from './incrementReducer'
import decrementReducer from './decrementReducer'
import getPostReducer from './post/getPostReducer'


export default combineReducers({
    form: formReducer,
    incrementReducer : incrementReducer,
    decrementReducer: decrementReducer,
    getPostReducer: getPostReducer
})

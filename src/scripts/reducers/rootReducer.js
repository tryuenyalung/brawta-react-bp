import { combineReducers } from 'redux'
import incrementReducer from './incrementReducer'
import decrementReducer from './decrementReducer'
import getPostReducer from './post/getPostReducer'


export default combineReducers({
   incrementReducer,
   decrementReducer,
   getPostReducer
})

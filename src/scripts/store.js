import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

const initialState = {}
const middleware = {}


const store = createStore(
        rootReducer 
    )


export default store
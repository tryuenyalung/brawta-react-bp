import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'


const initialState = {}

// const middleware = store => {
//     return next => {
//         return action => {
//             console.log(`Middleware Dispatching: ${action.type}`)
//             const result = next(action)
//             console.log(`Middleware next state ${store.getState()}`)
//             return result
//         }
//     }
// }

// const middleware = store => next => action => {
//     console.log(`Middleware Dispatching: ${action.type}`)
//     const result = next(action)
//     console.log(`Middleware next state store`, store.getState()  )
//     return result
  
// }

//enable react dev tools on browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers( applyMiddleware(thunk) )
)

 
export default store
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import store from './scripts/store'

import App from './scripts/components/App.jsx'


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker()



 
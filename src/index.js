import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import store from './scripts/store'

import App from './scripts/App.jsx'


const application = (
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render( application, document.getElementById('root') )

registerServiceWorker()



 
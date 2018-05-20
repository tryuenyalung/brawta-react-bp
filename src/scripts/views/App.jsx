// module import
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// project import
import './../../assets/styles/App.css'
import { routeCodes } from './../constants/routes'
import Axios from './Axios'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'

class App extends Component {

  render() {

    return (
      <div>
          <Switch>
              {/* Route serves as client endpoints */}
              <Route exact path={ routeCodes.HOME } component={ Home } />
              <Route exact path={ routeCodes.AXIOS } component={ Axios } />
              <Route path='*' component={ NotFound } />
          </Switch>
      </div>
    )

  }

}

export default App


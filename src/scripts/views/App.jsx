// module import
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// project import
import './../../assets/styles/App.css'
import { routeCodes } from './../constants/routes'
import Axios from './Axios'
import Home from './Home.jsx'

class App extends Component {

  render() {

    return (
      <div>
          <Switch>
              {/* Route servers as client endpoints */}
              <Route exact path={ routeCodes.HOME } component={ Home } />
              <Route exact path={ routeCodes.AXIOS } component={ Axios } />
          </Switch>
      </div>
    )

  }

}

export default App


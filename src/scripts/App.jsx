// module import
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// project import
import logo from './../images/logo.svg'
import './../styles/css/App.css'
import { routeCodes } from './constants/routes'
import Counter from './components/Counter.jsx'
import NavBar from './components/NavBar.jsx';


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Boiler Plate
          <NavBar/>
        </p>
        
        {/* 
          Content:

         */}
        <div>
          <Switch>
          {/* Route servers as client endpoints */}
          <Route exact path={ routeCodes.COUNTER } component={ Counter } />
          </Switch>
        </div>

      
      </div>
    )

  }

}

export default App

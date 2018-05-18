// module import
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// project import
import logo from './../assets/images/logo.svg'
import './../assets/styles/App.css'
import { routeCodes } from './constants/routes'
import Counter from './components/Counter.jsx'
import AppNavBar from './components/AppNavBar.jsx'

import { Container, Row, Col } from 'reactstrap'


class App extends Component {

  render() {

    return (

      <div>
      <AppNavBar/>
        
        <Container>
          <Row>
            <Col>
              <div>
                <Switch>
                {/* Route servers as client endpoints */}
                <Route exact path={ routeCodes.COUNTER } component={ Counter } />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       
      
    )

  }

}

export default App


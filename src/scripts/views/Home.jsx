import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar.jsx';
import Card from './../components/home/card';

import {increment} from './../actions/increment'
import {decrement} from './../actions/decrement'


//get state
const mapStateToProps = state => { 
    return{
      inc_counter: state.incrementReducer.get('counter'),
      dec_counter: state.decrementReducer.get('counter')
    }
}

//dispatch actions
const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch( increment() ),
      decrement: () => dispatch( decrement() ) 
    }
}


class Home extends Component {

  renderCard =(title, subtitle, card_text, color, button_text, onClick)=>{
    return(
      <Card
        card_title={title}
        card_subtitle={subtitle}
        card_text={card_text}
        button_color={color}
        button_text={button_text}
        btn_onClick={onClick}
      />
    )
  }

  render() {

    return (
      <div>
        <AppNavBar/>
        <br/>

        <Container>
          <Row>
            <Col>
              {this.renderCard(
                "Increment Card",
                this.props.inc_counter,
                "Test Increment",
                "info",
                "Increment",
                this.props.increment
              )}
            </Col>

            <Col>
              {this.renderCard(
                "Increment Card",
                this.props.dec_counter,
                "Test Decrement",
                "danger",
                "Decrement",
                this.props.decrement
              )}
            </Col>


          </Row>
        </Container>
      </div>
    )

  }

}//@end

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Home)



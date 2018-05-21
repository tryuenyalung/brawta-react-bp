import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container,
        Row,
        Col,
        CardImg,
        Button} from 'reactstrap'

// project imports
import AppNavBar from './../components/global/AppNavBar'
import AppCard from './../components/global/AppCard'
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
  
  static propTypes = {
    inc_counter: PropTypes.number,
    dec_counter: PropTypes.number,
  }

  renderCard =(img, title, subtitle, card_text, color, button_text, onClick)=> (
        <div>
          <AppCard
            card_img={img}
            card_title={title}
            card_subtitle={subtitle}
            card_body="">
            <Button className="float-right" onClick={onClick}  color={color}>{button_text}</Button>
          </AppCard><br/>
        </div>
  )//@end

  render() {
    return (
      <div>
        <AppNavBar/>
        <br/>

        <Container><br/><br/>
          <Row>

            <Col>
              {this.renderCard(
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />,
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
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />,
                "Decrement Card",
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



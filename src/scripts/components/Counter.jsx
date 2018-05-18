import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment, first} from './../actions/increment'
import {get_post, get_post_by_id} from './../actions/post/get_post'
import {decrement} from './../actions/decrement'
import * as url from './../../assets/images/sample.JPG';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

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
      get_post: () => dispatch( get_post() ),
        get_post_by_id: (id) => dispatch( get_post_by_id(id) ),
        first: () => dispatch( first() ),
        increment: () => dispatch( increment() ),
        decrement: () => dispatch( decrement() ) 
    }
}


class Counter extends Component {
  

  render() {

    return (
      <div>

        <div>
        <Card>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
      </CardBody></Card>
        </div>
        <Button color="danger">Danger!</Button>
        <img src={url} width="100%" alt=""/>
        <h1>Counter Increment State {this.props.inc_counter}</h1>
        <button onClick= {this.props.first} >Add</button>        
        <h1>Counter Decrement State {this.props.dec_counter}</h1>
        <button onClick= {this.props.decrement} >Subract</button>

        <button onClick= {this.props.get_post} >Fetch</button>
        <button onClick= {this.props.get_post_by_id} >Fetch One</button>
      </div>
    )

  }

}//@end

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter)



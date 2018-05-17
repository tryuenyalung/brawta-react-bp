import React, { Component } from 'react'
import { connect } from 'react-redux'
import {INCREMENT} from './../actions/increment'
import {DECREMENT} from './../actions/decrement'

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
        increment: () => dispatch({type: INCREMENT}),
        decrement: () => dispatch({type: DECREMENT}) 
    }
}


class Counter extends Component {

  render() {

    return (
      <div>
        <h1>Counter Increment State {this.props.inc_counter}</h1>
        <button onClick= {this.props.increment} >Add</button>        
        <h1>Counter Decrement State {this.props.dec_counter}</h1>
        <button onClick= {this.props.decrement} >Subract</button>
      </div>
    )

  }

}//@end

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter)



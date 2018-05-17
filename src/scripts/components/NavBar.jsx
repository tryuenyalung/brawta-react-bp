import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { routeCodes } from './../constants/routes'

export default class NavBar extends Component {
  render() {
  
    return (
      <div>
        {/* NavLink servers as anchor tag on jsx */}
        <NavLink
            activeClassName=''
            className=''
            to={ routeCodes.HOME }>
            Home
        </NavLink>

        <span>&emsp;</span>

        <NavLink
            activeClassName=''
            className=''
            to={ routeCodes.COUNTER }>
            Counter
        </NavLink>

        <span>&emsp;</span>
        
      </div>
    )
  
    }

}//@end

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { routeCodes } from './../constants/routes'


import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RCNavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Counter from './Counter.jsx'

export default class AppNavBar extends Component {
  render() {
  
    return (
      // <div>
      //   {/* NavLink servers as anchor tag on jsx */}
        // <NavLink
        //     activeClassName=''
        //     className=''
        //     to={ routeCodes.HOME }>
        //     Home
        // </NavLink>

      //   <span>&emsp;</span>

      //   <NavLink
      //       activeClassName=''
      //       className=''
      //       to={ routeCodes.COUNTER }>
      //       Counter
      //   </NavLink>

      //   <span>&emsp;</span>
        
      // </div>



      <div>
        
        <Navbar color="light" light expand="md">
          <Container> 
          <NavbarBrand href="/">reactstrap</NavbarBrand>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <RCNavLink href="/components/">Components</RCNavLink>
              </NavItem>
              <NavItem>
                <RCNavLink href="https://github.com/reactstrap/reactstrap">GitHub</RCNavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
            
      </div>

      
    )
  
    }

}//@end

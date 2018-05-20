import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { routeCodes } from './../../constants/routes'


import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


export default class AppNavBar extends Component {
  render() {
  
    return (

      <div>
        
        <Navbar className="fixed-top shadow-sm" color="light" light expand="md">
          <Container> 
            <NavbarBrand tag={Link} to={ routeCodes.HOME } >reactstrap</NavbarBrand>

            <Nav className="ml-auto" navbar>


              <NavItem>
                <NavLink tag={Link} to={ routeCodes.HOME }> 
                  Counter
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to={ routeCodes.AXIOS }> 
                  Axios
                </NavLink>
              </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret> Options </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem> Option 1 </DropdownItem>
                <DropdownItem> Option 2 </DropdownItem>
                <DropdownItem divider />
                <DropdownItem> Reset </DropdownItem>
              </DropdownMenu>

            </UncontrolledDropdown>

            </Nav>
            
          </Container>
        </Navbar>
            
      </div>

      
    )
  
  }
}//@end











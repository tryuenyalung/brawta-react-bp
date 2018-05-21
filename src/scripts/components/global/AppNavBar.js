import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { routeCodes } from './../../constants/routes'

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

export default class AppNavBar extends Component {

  constructor(props) {
    super(props)
    this.state = { isNavTogglerOpen: false }
  }

  toggleNavBar =()=> {
    this.setState({
      isNavTogglerOpen: !this.state.isNavTogglerOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar className="fixed-top shadow-sm" color="light" light expand="md">
          <Container>
            <NavbarBrand tag={Link} to={ routeCodes.HOME } >reactstrap</NavbarBrand>

            <NavbarToggler onClick={this.toggleNavBar} />

              <Collapse isOpen={this.state.isNavTogglerOpen} navbar>

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

              </Collapse>

          </Container>
        </Navbar>
      </div>
    )

  }


}//@end









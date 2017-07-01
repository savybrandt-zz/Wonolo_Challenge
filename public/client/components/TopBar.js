import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router'
import LoginButton from "./Login/LoginButton.js";

export default class TopBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img className="smallLogo" src="https://www.wonolo.com/hs-fs/hubfs/2016-02_Wonolo_Redesign/wonolo-logo-yellow.png?t=1498844569866&width=44&name=wonolo-logo-yellow.png"></img></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#/user">Find a Job</NavItem>
            <NavItem eventKey={2} href="#/overview">Post a Job</NavItem>
            <NavItem eventKey={3} ><LoginButton/></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router'
import LoginButton from "./Login/LoginButton.js";
import ProfileTool from "./Profile/ProfileTool.js";

export default class TopBar extends React.Component {
		constructor(props) {
		super(props);
		this.state = {
			user: false
		};
		this.toggleLogin = this.toggleLogin.bind(this);
	}

	toggleLogin() {
		this.setState({
			user: !this.state.user
		})
	}

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
            <NavItem eventKey={1}><Link to="/jobs" className="Link">Find a Job</Link></NavItem>
            <NavItem eventKey={2}><Link to={this.state.user ? "/" + this.props.id + "/jobs" : "/"} className="Link">Post a Job</Link></NavItem>
            <NavItem eventKey={3} >{this.state.user ? (<ProfileTool toggleLogin={this.toggleLogin}/>) : (<LoginButton toggleLogin={this.toggleLogin}/>)}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
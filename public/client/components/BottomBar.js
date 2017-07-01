import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router'

export default class Botto extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<div className="BottomBar">
		      <Navbar inverse collapseOnSelect>
		      </Navbar>
				</div>
			)
	}
}
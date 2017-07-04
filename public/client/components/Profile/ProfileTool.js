import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

export default class HireButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<DropdownButton title={this.props.user || "Savy"} className="yellow">
		    <MenuItem eventKey="1">Profile</MenuItem>
		    <MenuItem eventKey="2">My Jobs</MenuItem>
		    <MenuItem divider />
		    <MenuItem onClick={this.props.toggleLogin}><Link to="/" className="yellow">Logout</Link></MenuItem>
		  </DropdownButton>
			)
	}
}
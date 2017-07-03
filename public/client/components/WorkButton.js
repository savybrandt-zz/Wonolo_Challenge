import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';


export default class WorkButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Link to="/jobs"><Button className={this.props.style}>Work</Button></Link>
			)
	}
}
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Experience extends React.Component {
	render() {
		return (
				<Button className={this.props.style}>Hire</Button>
			)
	}
}
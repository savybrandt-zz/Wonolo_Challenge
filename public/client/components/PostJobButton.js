import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class FindJobButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<div className="FindJobButton">
					<Button>Hire</Button>
				</div>
			)
	}
}
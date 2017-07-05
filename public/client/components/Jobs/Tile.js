import React from 'react';
import { Button } from 'react-bootstrap';

export default class Tile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Tile">
				<h3>{this.props.position}</h3><br/>
				<h4>{"$" + this.props.wage + " " + this.props.city}</h4>
			</div>
			)
	}
}
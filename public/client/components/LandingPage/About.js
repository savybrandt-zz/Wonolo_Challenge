import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import Workers from './Workers.js';
import Businesses from './Businesses.js';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Jumbotron className="About">
					<h1>What is Wonolo?</h1>
					<p> Wonolo removes the friction for companies to find talent for on-demand hourly or daily job needs, while creating freedom through flexibility for job seekers. </p>
					<Workers />
					<Businesses />
				</Jumbotron>
			)
	}
}
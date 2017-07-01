import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import Review from './Review.js'

export default class Workers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Jumbotron className="Workers">
				<div>
					<h2> For Workers </h2>
					<img className="businessFacts" src="../images/businessFacts.png"/>
				</div>
				<Review />
			</Jumbotron>
			)
	}
}
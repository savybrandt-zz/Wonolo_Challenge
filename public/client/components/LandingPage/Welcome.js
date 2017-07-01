import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import BigLogo from '../BigLogo.js';
import FindJobButton from '../FindJobButton.js';
import PostJobButton from '../PostJobButton.js';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Jumbotron className="Welcome">
					<h2>WELCOME TO</h2>
					<BigLogo />
					<FindJobButton />
					<PostJobButton />
				</Jumbotron>
			)
	}
}
import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import WorkButton from '../WorkButton.js';
import HireButton from '../HireButton.js';

export default class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Jumbotron className="Welcome">
					<div className="inWelcome">
						<img className="BigLogo" src="https://www.jobsondemand.com/wp-content/uploads/2016/09/wonolo.png"/>
						<WorkButton style={"splashButton"}/>
						<HireButton style={"splashButton"} />
					</div>
				</Jumbotron>
			)
	}
}
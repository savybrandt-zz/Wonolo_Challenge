import React from 'react';
import LandingPage from './LandingPage/LandingPage.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<div className="App">
					<LandingPage />
				</div>
			)
	}
}
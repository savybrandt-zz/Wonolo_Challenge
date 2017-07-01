import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import For from './For.js';

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<Jumbotron className="About">
					<div className="padding">
						<h1>What is Wonolo?</h1>
						<p> Wonolo removes the friction for companies to find talent for on-demand hourly or daily job needs, while creating freedom through flexibility for job seekers. </p>
					</div>
					<For display={"Job Seakers"} class={"jobSeakers"} image={"../images/jobSeakers.png"} imgClass={"jobSeakersImg"} review={"wonoloerReviews"}/>
					<div className="gap"></div>
					<For display={"Businesses"} class={"Businesses"} image={"../images/businesses.png"} imgClass={"businessesImg"} review={"businessReviews"}/>
				</Jumbotron>
			)
	}
}
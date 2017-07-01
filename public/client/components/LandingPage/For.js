import React from 'react';
import { Jumbotron } from 'react-bootstrap'
import Review from './Review.js'

export default class Workers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="For">
				<div className={this.props.class}>
					<h2> For {this.props.display} </h2>
					<img className="iconFacts" src={this.props.image}/>
				</div>
				<Review class={this.props.review}/>
			</div>
			)
	}
}
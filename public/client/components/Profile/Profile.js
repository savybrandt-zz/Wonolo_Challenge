import React from 'react';
import Background from "./Background.js";
import Badges from "./Badges.js";
import Experience from "./Experience.js";
import Stars from "./Stars.js";
import Summary from "./Summary.js";

export default class WorkButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Profile">
				<Background image={this.state.image} />
				<img className="ProfilePic" src={this.state.photo} />
				<div className="profileBar">
					<h2>{this.state.name}</h2>
					<Stars rating={this.state.rating}/>
					<h4>{this.state.city}</h4>
				</div>
				<Summary />
				{this.state.wonoloer ? (
					<Experience />) : (
					<Jobs />
					)}
				<Badges badges={this.state.badges}/>
			</div>
		)
	}
}
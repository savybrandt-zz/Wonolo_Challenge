import React from 'react';
import axios from 'axios';
import Badges from "./Badges.js";
import Experience from "./Experience.js";
import Stars from "./Stars.js";
import Summary from "./Summary.js";
import TopBar from "../TopBar.js";
import BottomBar from "../BottomBar.js";

export default class WorkButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var context = this;
		axios.get('/users/' + this.props.id)
		.then((res) => {
			var wonoloer = (res.user.type === "Worker");
			var name = (wonoloer ? res.user.first_name : res.user.business_name);
			var pic = (wonoloer ? res.user.avatar_url : res.user.logo_url);
			context.setState({
				pic: pic,
				name: name,
				rating: res.user.rating,
				city: res.user.city,
				wonoloer: wonoloer,
				badges: res.user.badges
			})
		})
	}

	render() {
		return (
			<div className="Profile">
			<TopBar />
				<jumbotron className="yellow" />
				<img className="ProfilePic" src={this.state.pic} />
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
				<BottomBar />
			</div>
		)
	}
}
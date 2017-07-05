import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import axios from 'axios';
import Badges from "./Badges.js";
import Experience from "./Experience.js";
import Stars from "./Stars.js";
import Summary from "./Summary.js";
import TopBar from "../TopBar.js";
import BottomBar from "../BottomBar.js";
import EmployerJobs from "./EmployerJobs.js";

export default class WorkButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {		};
	}

	componentDidMount() {
		var context = this;
		var id = window.location.hash.split('').splice(2, window.location.hash.length).join('');
		console.log('id: ', id)
		axios.get('/user/' + id)
		.then((res) => {
			console.log("user res in Profile: ", res.data.user)
			var wonoloer = (res.data.user.type === "Worker");
			var name = (wonoloer ? res.data.user.first_name : res.data.user.business_name);
			var pic = (wonoloer ? res.data.user.avatar_url : res.data.user.logo_url);
			context.setState({
				pic: pic,
				name: name,
				rating: res.data.user.rating,
				city: res.data.user.city,
				wonoloer: wonoloer,
				badges: res.data.user.badges
			})
		})
		.catch((err) => {
			console.log("err in Profile: ", err)
		})
	}

	render() {
		return (
			<div className="Profile">
			<TopBar />
				<Jumbotron className="banner"></Jumbotron>
				<div className="innerProfile">
					<Image src={this.state.pic || "https://p4.zdassets.com/hc/settings_assets/627312/200102419/ck6qvPqFZxhptolVR7uEDQ-W_Logo.png"} circle />
					<Stars rating={this.state.rating}/>
					<div className="profileBar">
						<h2>{this.state.name}</h2>
						<h4>{this.state.city || "San Francisco"}</h4>
						<Summary />
					</div>
					{this.state.wonoloer ? (
						<Experience />) : (
						<EmployerJobs id={this.props.id}/>
						)}
					<Badges badges={this.state.badges}/>
				</div>
				<BottomBar />
			</div>
		)
	}
}
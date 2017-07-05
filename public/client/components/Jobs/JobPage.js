import React from 'react';
import axios from'axios';
import { Jumbotron, Panel, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';
import TopBar from "../TopBar.js";
import BottomBar from "../BottomBar.js";
import parseDescription from "../../utils/parseDescription.js";


export default class JobPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		var context = this;
		var id = window.location.hash.split('').splice(7, window.location.hash.length).join('');
		console.log('id: ', id)
		axios.get('/job/' + id)
		.then((res) => {
			var description = parseDescription.call(null, res.data.job_request.description);
			console.log('description: ', description)
			return {job: res.data.job_request, description: description};
			context.setState({
				 position: res.job.request_name,
				 category: res.job.category,
				 wage: res.job.wage,
				 venue: res.job.venue,
				 city: res.job.city,
				 updated_at: res.job.updated_at,
				 description: res.description,
				 company_id: res.job.company_id
			})
		})
		.catch((err) => {
			console.log("err in JobPage: ", err);
		})
	}

	render() {
		return (
				<div>
					<TopBar />
					<div className="JobPage">
						<Jumbotron className="banner">
							<h1 className="jobHeader">{this.state.position}</h1>
							<h4>{this.state.category +"  ●  $"+ this.state.wage +".00  ●  "+ this.state.city }</h4>
						</Jumbotron> <br/><br/>
						<div className="jobDetails">
							<PageHeader><small>Tasks to be Performed</small></PageHeader>
							<p>{this.state.description.tasks}</p>
							<PageHeader><small>Requirements</small></PageHeader>
							<p>{this.state.description.requirements}</p>
							<PageHeader><small>About Us</small></PageHeader>
							<p>{this.state.description.company}</p>
							<PageHeader><small>Travel Tips</small></PageHeader>
							<p>{this.state.description.travel}</p>
							<PageHeader><small>Arrival Instructions</small></PageHeader>
							<p>{this.state.description.arrival}</p>
						</div>
					</div>
					<BottomBar />
				</div>
			)
	}
}
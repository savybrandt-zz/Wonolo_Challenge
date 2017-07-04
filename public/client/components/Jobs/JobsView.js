import React from 'react';
import { Jumbotron, Table, FormGroup, Col, FormControl, Button, Form } from 'react-bootstrap';
import Grid from './Grid.js';
import TopBar from "../TopBar.js";
import BottomBar from "../BottomBar.js";

export default class JobsView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sort: "ratings"
		};
	}

	render() {
		return (
			<div className="JobsView">
			<TopBar />
				<Jumbotron className="SearchJobs">
				<h1>Search Jobs</h1>
				</Jumbotron>
				<h3>Work Now Locally</h3>
				<Form inline>
				<FormGroup controlId="formHorizontalEmail">
		        <FormControl type="Zipcode" placeholder="Enter Zip Code" />
		     	  <Button className="yellow" type="submit">Search Jobs</Button>
				</FormGroup>
				</Form>
				<Grid/>
			<BottomBar />
			</div>
			)
	}
}
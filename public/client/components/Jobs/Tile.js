import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Job extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<div className="Job">
					<h3>{this.props.position}</h3><br/>
					<h4>{this.props.wage}</h4><br/>
					<p>{this.props.city + " " + this.props.time + " " + this.props.duration}</p>
					<Link to={"/jobs/"+ this.props.id}>
						<Button className="yellow"> See More </Button>
					</Link>
				</div>
			)
	}
}
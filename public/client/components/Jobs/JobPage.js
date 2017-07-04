import React from 'react';
import axios from'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import TopBar from "../TopBar.js";
import BottomBar from "../BottomBar.js";


export default class JobPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount () {
		var context = this;
		axios.get('/job/' + this.props.id)
		.then((res) => {
			context.setState({

			})
		})
	}

	render() {
		return (
				<div className="JobPage">
					<TopBar />
					<BottomBar />
				</div>
			)
	}
}
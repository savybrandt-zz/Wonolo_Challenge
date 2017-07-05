import React from 'react';
import axios from 'axios';
import { Button, Panel } from 'react-bootstrap';
import { Link } from 'react-router';
import distributeRows from '../../utils/distributeRows.js';

export default class Badges extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		var list = this.props.badges;
		console.log('list: ', list)
		var badges = []
		for(var i = 0; i < list.length; i++) {
			console.log(list[i].badge_id)
			axios.get('/badges/' + list[i].badge_id)
			.then((res) => {
				console.log(res.data.badge)
				badges.push(res.data.badge);
			})
			.catch((err) => {
				console.log('err in Badges: ', err)
			})
		}
	}

	render() {
		return (
				<Panel className="Badges">
					<h2>Badges</h2>
					{this.state.badges}
				</Panel>
			)
	}
}
import React from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
import distributeRows from '../../utils/distributeRows.js';

export default class Badges extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			badges: [[1, 2, 3]]
		}
	}

	componentDidMount() {
		var list = this.props.badges;
		console.log('list: ', list)
		var badges = []
		for(var i = 0; i < list.length; i++) {
			console.log(list[i].badge_id)
			axios.get('/badges/' + list[i].badge_id)
			.then((res, i) => {
				badges.push(res.data.badge);
				var data = distributeRows.bind(null, badges, (badges.length < 5 ? badges.length : 5) );
				this.setState({
					badges: data
				})
			})
			.catch((err) => {
				console.log('err in Badges: ', err)
			})
		}
	}

	render() {
		return (
				<div className="Badges">
					<h3>Badges</h3>
					<Table striped bordered responsive>
			    <tbody>
			    	{this.state.badges.map((row, j) => {
			    		console.log(row)
			    		return (
			    			<tr key={j}>
			    				{row.map((badge, i) => {
			    					if(badge) {
				    					return ( 
					    					<div>
						    					<h4>{badge.name}</h4>
						    					<img src={badge.icon_url} />
					    					</div>
				    					)
			    					}
			    				})}
			    			</tr>
			    			)
			    	})}
			    </tbody>
			  </Table>
			</div>
		)
	}
}
import React from 'react';
import axios from 'axios';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

export default class HireButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var context = this;
		axios.get('/users/' + this.props.email)
		.then((res) => {
			var name = (res.data.users[0].type === "Employer" ? res.data.users[0].business_name : res.data.users[0].first_name)
			console.log(res.data.users[0])
			context.setState({
				user: name,
				id: res.data.users[0].id
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	render() {
		return (
			<DropdownButton title={this.state.user || "Savy"} className="yellow">
		    <MenuItem eventKey="1"><Link to={"/" + this.state.id} className="yellow">Profile</Link></MenuItem>
		    <MenuItem eventKey="2"><Link to={"/" + this.state.id + '/jobs'} className="yellow">My Jobs</Link></MenuItem>
		    <MenuItem divider />
		    <MenuItem onClick={this.props.toggleLogin.bind(null, null)}><Link to="/" className="yellow">Logout</Link></MenuItem>
		  </DropdownButton>
			)
	}
}
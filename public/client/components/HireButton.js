import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class HireButton extends React.Component {
	render() {
		return (
				<Button onClick={checkLogin}>Hire</Button>
			)
	}
}
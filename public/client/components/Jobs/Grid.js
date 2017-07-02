import React from 'react';
import { Table, Pager } from 'react-bootstrap';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Grid">
			  <Table striped bordered hover responsive>
			    <tbody>
			      <tr>
			        <td>1</td>
			        <td>Mark</td>
			        <td>Otto</td>
			      </tr>
			      <tr>
			        <td>2</td>
			        <td>Jacob</td>
			        <td>Thornton</td>
			      </tr>
			      <tr>
			        <td>3</td>
			        <td>Larry the Bird</td>
			        <td>@twitter</td>
			      </tr>
			    </tbody>
			  </Table>
			  <Pager>
			    <Pager.Item className="yellow" href="#">Previous</Pager.Item>
			    {' '}
			    <Pager.Item className="yellow" href="#">Next</Pager.Item>
			  </Pager>
		  </div>
			)
	}
}
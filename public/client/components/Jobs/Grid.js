import React from 'react';
import axios from'axios';
import { Table, Pager } from 'react-bootstrap';

var instance = axios.create({
 	baseURL: '127.0.0.1:3000',
});

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			page: 1,
			state: "California"
		};
	}

	componentDidMount () {
  	var context = this;
    axios.get('/jobs/' + context.state.page + '/' + context.state.state)
    	.then(function(res) {
      context.setState({jobs: res.data});
    });
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
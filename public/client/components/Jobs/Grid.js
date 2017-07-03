import React from 'react';
import axios from'axios';
import { Table, Pager } from 'react-bootstrap';
import Tile from './Tile.js';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			page: 1
		};
	}

	componentDidMount () {
  	var context = this;
    axios.get('/jobs/' + context.state.page)
    .then((res) => {
  		var rows = (res.data.job_requests.length + (3 - (res.data.job_requests.length % 3)) ) / 3;
  		var jobs = [];

		  for(var i = 0; i < rows; i++) {
		  	var tiles = [];
		  	for(var j = (i * 3); j < (i * 3) + 3; j++) {
		  		tiles.push(res.data.job_requests[j]);
		  	}
				jobs.push(tiles)
			}
      context.setState({
      	jobs: jobs, 
      	page: context.props.page
      });
    })
    .catch((err) => {
    	console.log(err);
    })
  }

	render() {

		return (
			<div className="Grid">
			  <Table striped bordered hover responsive>
			    <tbody>
			    	{this.state.jobs.map((row, j) => {
			    		console.log(row)
			    		return (
			    			<tr key={j}>
			    				{row.map((job, i) => {
			    					if(job) {
				    					return ( <td>
				    						<Tile wage={job.wage} position={job.request_name} city={job.city}
				    						time={job.start_time} duration={job.duration} id={job.id} key={i}/>				
				    					</td>
				    					)
			    					}
			    				})}
			    			</tr>
			    			)
			    	})}
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
import React from 'react';
import axios from'axios';
import { Table, Pager, Pagination } from 'react-bootstrap';
import { Link } from 'react-router';
import Tile from './Tile.js';
import distributeRows from '../../utils/distributeRows.js';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			page: 1
		};

		this.handleSelect = this.handleSelect.bind(this);
	}

	componentDidMount() {
  	var context = this;
    axios.get('/jobs/' + context.state.page)
    .then((res) => {
    	var jobs = distributeRows(res.data.job_requests, 3);
      context.setState({
      	jobs: jobs, 
      });
    })
    .catch((err) => {
    	console.log(err);
    })
  }

  handleSelect(eventKey) {
   	var context = this;
  	var page = eventKey;
  	axios.get('/jobs/' + page)
  	.then((res) => {
    	var jobs = distributeRows(res.data.job_requests, 3);
	  	context.setState({
	  		page: page,
	  		jobs: jobs
	  	})
    	window.scrollTo(0, 0)
  	})
  }

	render() {
		return (
			<div className="Grid">
			  <Table striped bordered responsive>
			    <tbody>
			    	{this.state.jobs.map((row, j) => {
			    		console.log(row)
			    		return (
			    			<tr key={j}>
			    				{row.map((job, i) => {
			    					if(job) {
				    					return ( 
					    					<td>
						    					<Link to={"/jobs/"+ job.id} className="yellow">
							    					<Tile position={job.request_name} wage={job.wage} city={job.city} key={i}/>				
						    					</Link>
					    					</td>
				    					)
			    					}
			    				})}
			    			</tr>
			    			)
			    	})}
			    </tbody>
			  </Table>
			    <Pagination className="yellow"
		        prev
		        next
		        boundaryLinks
		        items={20}
		        maxButtons={5}
		        activePage={this.state.page}
		        onSelect={this.handleSelect} />
		  </div>
			)
	}
}
import React from 'react';
import axios from'axios';
import { Table, Pager } from 'react-bootstrap';
import Tile from './Tile.js';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [{company: "Company", position:"Position", date:"July 1, 2017", time:"1:00", duration:"et. duration"}],
			page: 1,
			state: "California"
		};
	}

	componentDidMount () {
  	var context = this;
    axios.get('/jobs/' + context.state.page + '/' + context.state.state)
    .then(function(res) {
  		var rows = (res.data.length + (3 - (res.data.length % 3)) ) / 3;
  		var jobs = [];

		  for(var i = 0; i < rows; i++) {
		  	var tiles = [];
		  	for(var j = (i * 3); j < (i * 3) + 3; j++) {
		  		tiles.push(res.data[j]);
		  	}
				jobs.push(tiles)
			}

      context.setState({
      	jobs: jobs, 
      	page: context.props.page,
      	state: context.props.state
      });

    });
  }


	render() {

		return (
			<div className="Grid">
			  <Table striped bordered hover responsive>
			    <tbody>
			    	{this.state.jobs.map((row) => {
			    		return (
			    			<tr>
			    				{row.map((job) => {
			    					return (
			    						<Tile company={job.company} position={job.position} date={job.date}
			    						time={job.time} duration={job.duration} id={job.id} />
			    						)
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
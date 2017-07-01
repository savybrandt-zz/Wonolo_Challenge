import React from 'react';
import { Carousel } from 'react-bootstrap'

export default class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Carousel indicators="false" className="Review">
		    <Carousel.Item>
		      <img src="../images/Inga.png"/>   
		    </Carousel.Item>
		    <Carousel.Item>
		      <img src="../images/Minnie.png"/>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img src="../images/Reilly.png"/>
		    </Carousel.Item>
  		</Carousel>
			)
	}
}
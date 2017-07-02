import React from 'react';
import { Carousel } from 'react-bootstrap'

export default class Review extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Carousel indicators={false} controls={false} className={this.props.class}>
		    <Carousel.Item>
		      <img className="reviewImg" src="../images/Inga.jpg"/>   
		    </Carousel.Item>
		    <Carousel.Item>
		      <img className="reviewImg" src="../images/Minnie.jpg"/>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img className="reviewImg" src="../images/Reilly.jpg"/>
		    </Carousel.Item>
  		</Carousel>
			)
	}
}
import React from 'react';
import ReactStars from 'react-stars';

export default class Stars extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Stars">
				<ReactStars
					count={5}
					value={Math.round(this.props.rating * 2) / 2}
					edit={false}
					size={30}
					color2={'#F7D91F'} />
				<h6>{Math.round(this.props.rating * 10) / 10}</h6>
			</div>
			)
	}
}
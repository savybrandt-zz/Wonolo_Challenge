import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class SocialBar extends React.Component {
	render() {
		return (
				<div className="SocialBar">
					<SocialIcon network="linkedin" color="black" style={{ height: 30, width: 30, margin: 5, cursor: 'pointer' }} />
					<SocialIcon network="facebook" color="black" style={{ height: 30, width: 30, margin: 5, cursor: 'pointer' }} />
					<SocialIcon network="twitter" color="black" style={{ height: 30, width: 30, margin: 5, cursor: 'pointer' }} />
					<SocialIcon network="email" color="black" style={{ height: 30, width: 30, margin: 5, cursor: 'pointer' }} />
				</div>
			)
	}
}
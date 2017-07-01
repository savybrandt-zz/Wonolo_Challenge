import React from 'react';
import Welcome from './Welcome.js';
import About from './About.js';


export default class LandingPage extends React.Component {
	 constructor(props) {
   super(props);
   this.state = {};
  }

  render() {
  	return (
  		<div>
  			<Welcome />
  			<About />
  		</div>
  		)
  }
}


import React from 'react';
import TopBar from '../TopBar.js';
import Welcome from './Welcome.js';
import About from './About.js';
import Who from './Who.js';
import BottomBar from '../BottomBar.js';


export default class LandingPage extends React.Component {
	 constructor(props) {
   super(props);
   this.state = {};
  }

  render() {
  	return (
  		<div>
  			<TopBar />
  			<Welcome />
  			<About />
  			<Who />
  			<BottomBar />
  		</div>
  		)
  }
}


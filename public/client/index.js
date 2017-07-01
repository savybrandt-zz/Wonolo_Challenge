//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import JobsView from "./components/Jobs/JobsView.js";
import TopBar from "./components/TopBar.js";
import BottomBar from "./components/BottomBar.js";

render((
	<div className="App">
		<TopBar />
	  <Router history={hashHistory}>
	    <Route path="/" component={LandingPage}/>
	    <Route path="/jobs" component={JobsView}/>
	    <Route path="/" component={LandingPage}/>
	  </Router>
	  <BottomBar />
  </div>
), document.getElementById('app'))
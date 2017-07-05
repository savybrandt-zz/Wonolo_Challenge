//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import JobsView from "./components/Jobs/JobsView.js";
import JobPage from "./components/Jobs/JobPage.js";
import Profile from "./components/Profile/Profile.js";

render((
	<div className="App">
	  <Router history={hashHistory}>
	    <Route path="/" component={LandingPage}/>
	    <Route path="/jobs" component={JobsView}/>
	    <Route path="/jobs/:id" component={JobPage}/>
	    <Route path="/:id" component={Profile}/>
	  </Router>
  </div>
), document.getElementById('app'))
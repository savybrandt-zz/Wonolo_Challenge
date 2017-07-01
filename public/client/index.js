//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import LandingPage from './components/LandingPage/LandingPage';
import FindJobs from './components/FindJobs/FindJobs'

render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={LandingPage}/>
      <Route path="/jobs" component={FindJobs}/>
      <Route path="/" component={LandingPage}/>
    </Route>
  </Router>
), document.getElementById('app'))
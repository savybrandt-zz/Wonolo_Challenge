//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import JobsView from "./components/Jobs/JobsView.js"

render((
  <Router history={hashHistory}>
    <Route path="/" component={LandingPage}/>
    <Route path="/jobs" component={JobsView}/>
    <Route path="/" component={LandingPage}/>
  </Router>
), document.getElementById('app'))
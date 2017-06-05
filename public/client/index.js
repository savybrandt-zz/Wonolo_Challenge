
//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';

render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './components/Home';
import Projects from './components/Projects';
import Anatomy from './components/Anatomy';
import Gotal from './components/Gotal';
import About from './components/About';
import Contact from './components/Contact';


render((
  <div className="App">
	  <Router history={hashHistory}>
	    <Route path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/projects/anatomy" component={Anatomy}/>
      <Route path="/projects/gotal" component={Gotal}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
	  </Router>
  </div>
), document.getElementById('app'))
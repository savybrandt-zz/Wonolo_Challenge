import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';
import { Link } from 'react-router';

export default class Projects extends React.Component {
  render() {
    return (
      <div id='Projects'>
        <Topbar />
        <div id='project-list'>
          <h2 style={{opacity: 0.7}}><Link to="/projects/gotal" className="project-item">GODS OF THE AMERICAN LANDSCAPE</Link></h2>
          <h2 style={{opacity: 0.6}}><Link to="/projects/anatomy" className="project-item">ANATOMY VALLEY</Link></h2>
        </div>
        <Copyright />
      </div>
    )
  }
}
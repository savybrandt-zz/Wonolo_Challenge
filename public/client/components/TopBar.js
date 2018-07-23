import React from 'react';
import { Link } from 'react-router'

export default class TopBar extends React.Component {
 render() {
    return (
      <div id="TopBar">
        <a href="#"><img className="smallLogo" src="../images/moya_mainlogo.png"></img></a>
        <div id="nav">
          <Link to="/projects" className="Link">PROJECTS</Link>
          <Link to="/about" className="Link">ABOUT</Link>
          <Link to="/contact" className="Link">CONTACT</Link>
        </div>
      </div>
    );
  }
}
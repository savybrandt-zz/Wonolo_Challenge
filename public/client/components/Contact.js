import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default class Contact extends React.Component {
  render() {
    return (
      <div id='Contact'>
        <Topbar />
        <div className="main_content">
          <img className="title" src="../images/contact.png"/>
          <p>
            NATHANIEL GAROFALO- writer, director<br/>
            <br/>
            (925) 381-6003<br/>
            <br/>
            nathanielgarofalo@gmail.com
          </p>
        </div>
        <Copyright />
      </div>
    )
  }
}
import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default class Home extends React.Component {
  render() {
    return (
      <div id='Home'>
        <Topbar />
        <img className="bigLogo" src='../images/moya_homepage_asset.png'/>
        <Copyright />
      </div>
    )
  }
}
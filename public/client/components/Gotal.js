import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default class Gotal extends React.Component {
  render() {
    return (
      <div id='Gotal'>
        <Topbar />
        <div className="main_content">
          <img className="title" src="../images/gods.png"/>
          <p>
            Gods of the American Landscape is the first title to come from Studio Moya. <br/>
            Gods is a short film set against the backdrop of the natural world, an untapped wealth of beauty, whose true potential is unknown. <br/>
            Our story finds two men, the Young Prospector and the other credited simply as Man, <br/>
            who seemingly arrived here as strangers to one another, in pursuit of something beyond our understanding. <br/>
            <br/>
            <br/>
            We follow these men through an unsettling and emotional trek through this natural world to a destination one of them may not be prepared for. <br/>
            Gods of the American Landscape is a quiet meditation on devotion, potential and perspective. <br/>
            What does it mean to give yourself over to something you cannot understand?<br/>
          </p>
        </div>
        <Copyright />
      </div>
    )
  }
}
import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default class About extends React.Component {
  render() {
    return (
      <div id='About'>
        <Topbar />
        <div className="main_content">
          <img className="title" src="../images/about.png"/>
          <p>
            Studio Moya is a film studio created by writer & director Nathaniel Garofalo and based in Oakland, CA. <br/>
            We aim to produce challenging and bold narrative works with qualities we believe truly set them apart from other contemporary film. <br/>
            <br/>
            In some translations, the Kanji character 靄 (Moya) means Dust, Fog, Mist, Vapor. <br/>
            These words bring with them an overwhelming visual presence, and with those images, a fleeting notion, given their literal meanings. <br/>
            The strongest and most painful memories are much like these words: fleeting and intangible. <br/>
            They surround you with nothing to grasp on to. <br/>
            <br/>
            Studio Moya is in the early stages, you can read more about our first project Gods of the American Landscape in our Projects section.<br/>
             To make this short film, and eventually feature films, we need a core team of creatives and professionals to produce these works. <br/>
            Please contact me through my information on the Contact page. 
          </p>
        </div>
        <Copyright />
      </div>
    )
  }
}
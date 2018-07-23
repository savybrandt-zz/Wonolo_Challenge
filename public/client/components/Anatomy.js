import React from 'react';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default class Anatomy extends React.Component {
  render() {
    return (
      <div id='Anatomy'>
        <Topbar />
        <div className="main_content">
          <img className="title" src="../images/anatomy.png"/>
          <p>     
            a•nat•o•my <br/>
            noun<br/>
            1. Study of the structure of living things.<br/>
            2. The art of separating the parts of an organism in order to ascertain their position, relations, structure, and function.<br/>
            <br/>
            Anatomy Valley is an ensemble feature film set in the fictional Anatome Valley. Anatomy is the continuation of Gods of the American Landscape, 
            taking place in the modern day, in the land molded by men of the past. <br/>
            Acre devotes himself to an idea. Alden devotes himself to a friend.<br/>
            Em devotes herself to the past. Father Cobauld devotes himself to his work. Vale devotes himself to his curse.<br/> 
            An Old Surveyor devotes himself to his investment.The Author, Icarois devotes himself to his sickness. <br/>
            Ysandra devotes herself to love. Executioner Olt devotes himself to the future.<br/>
            <br/>
            Anatomy Valley is the further study of devotion, man’s relationship to a place, and how it shapes the disparate figures who 
            walked the path to Anatome.
          </p>
        </div>
        <Copyright />
      </div>
    )
  }
}
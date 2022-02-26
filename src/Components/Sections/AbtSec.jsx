import React from 'react';
import { Container } from 'react-bootstrap';
import './Sections.css';

function AbtSec(props) {
  return (
    <div>
      <div className = "abt-banner">
        <div className = "banner-txt">
          <h2>Hi I'm Karl Anjelo D. Pastrana</h2>
          <h4>a mobile and web application developer.</h4>
        </div>
      </div>

      <Container>
        <div className = "abt-main" id = "about">
          <h3>ABOUT ME</h3>
          <img src = {props.abtPic} alt = "about-img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor feugiat sapien, in malesuada dolor molestie at. 
            Curabitur imperdiet laoreet dui vel maximus. Cras pulvinar libero sit amet dui fringilla pharetra. 
            Maecenas nisi diam, sodales et bibendum ac, placerat sit amet lorem. Integer euismod nec erat nec tincidunt. 
            Nullam sit amet mauris congue, consequat mi vitae, rhoncus ligula. Ut ac odio turpis. Ut ac nisl orci. Vivamus tincidunt sem non mauris dapibus consequat. 
            Praesent pellentesque, sem eget vestibulum porta, augue quam scelerisque erat, a porta lorem ex eu mauris.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AbtSec
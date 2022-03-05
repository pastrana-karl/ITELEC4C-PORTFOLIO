import React from 'react';
import { Container } from 'react-bootstrap';
import TextDesc from '../reusable/txtDesc';
import './Sections.css';

function AbtSec(props) {
  return (
    <div>
      <div className = "abt-banner" id = "home">
        <div className = "banner-txt">
          <h2>Hi I'm Karl Anjelo D. Pastrana</h2>
          <h4>a mobile and web application developer.</h4>
        </div>
      </div>

      <Container>
        <div className = "abt-main" id = "about">
          <h3>ABOUT ME</h3>

          <TextDesc 
            img = {props.abtPic}
            txt = " I am a highly motivated and dedicated Information Technology student at the University of Santo Tomas. Throughout my academic years, I have been taught by various professionals in the field of Technology and have been exposed to various development tools. That being said, I have gained experience in mobile and web development.Furthermore, being exposed to various development teams in doing projects I also learned to be more collaborative with others and easy to go along with. "
          />
        </div>
      </Container>
    </div>
  )
}

export default AbtSec
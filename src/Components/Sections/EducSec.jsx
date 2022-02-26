import React from 'react';
import { Container } from 'react-bootstrap';
import './Sections.css';

function EducSec(props) {
  return (
    <>
        <Container>
            <div className = "educ-main" id = "education">
                <h3>EDUCATION</h3>
                <img src = {props.educPic} alt = "educ-img" />

                <div className = "educ-hist">
                    <div>
                        <h5>High School</h5>
                        <p>Notre Dame of Greater Manila ( 2012 - 2016 ) <br /> Grade 7 - Grade 10.</p>
                        <h5>Senior High School (STEM Track)</h5>
                        <p>Notre Dame of Greater Manila ( 2016 - 2018 ) <br /> Grade 11 - Grade 12. <br /> Taken ICT elective classes.</p>
                    </div>

                    <div>
                        <h5>College <br /> (B.S Information Technology Major in Web and Mobile Development)</h5>
                        <p>University of Santo Tomas ( 2018 - 2022 ) <br /> College of Information and Computing Sciences <br /> 1<sup>st</sup> year - 4<sup>th</sup> year.</p>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default EducSec
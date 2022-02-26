import React from 'react';
import { Container } from 'react-bootstrap';
import './Sections.css';

function SemSec(props) {
  return (
    <>
        <Container>
            <div className = "sem-main" id = "seminars">
                <h3>SEMINARS</h3>
                <div className = "sem-banner">
                    <img src = {props.sem1} alt = "sem-icon" />
                </div>
            </div>
        </Container>
    </>
  )
}

export default SemSec
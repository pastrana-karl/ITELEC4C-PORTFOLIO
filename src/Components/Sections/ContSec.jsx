import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
;import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Sections.css';

function ContSec(props) {
  return (
    <>
        <Container>
            <div className = "cont-main" id = "contact">
                <h3>CONTACT ME</h3>
                <div className = "info-order">
                    <div className = "cont-info">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>pastranakd@gmail.com</p>
                    </div>
                    <div className = "cont-info">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>09xxxxxxxxx</p>
                    </div>
                </div>

                <div className= "link-logo">
                    <a rel="noreferrer" href = "https://www.linkedin.com/in/karl-pastrana-349ba220a/" target = "_blank" >
                        <img src = {props.link} alt = "link-icon"/>
                    </a>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ContSec
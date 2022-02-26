import React from 'react';
import { Container } from 'react-bootstrap';
import './Sections.css';

function CertSec(props) {
  return (
    <>
        <Container>
            <div className = "cert-main" id = "certificates">
                <h3>CERTIFICATES</h3>
                <div className = "cert-disp">
                    <img src = {props.cert1} alt = "cert-icon" />
                    <img src = {props.cert2} alt = "cert-icon" />
                </div>
            </div>
        </Container>
    </>
  )
}

export default CertSec
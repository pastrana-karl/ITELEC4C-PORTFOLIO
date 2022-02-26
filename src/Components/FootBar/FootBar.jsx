import React from 'react';
import { MDBContainer } from "mdbreact";
import "./FootBar.css";

function FootBar() {
  return (
      <div className = "footer-copyright text-center py-3 sticky-bottom" id = "footer-bg">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Pastrana, Karl Anjelo D.
        </MDBContainer>
      </div>
  )
}

export default FootBar
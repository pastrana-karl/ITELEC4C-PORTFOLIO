import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <>
        <Navbar className = "nav-bg" collapseOnSelect fixed = "top" expand = "sm" bg = "dark" variant = "dark">
            <Container>
                <Navbar.Brand href = "/my-portfolio">
                    <img
                        src = "https://res.cloudinary.com/karlstorage/image/upload/v1645085917/free-img/fjqyijp9mvokafli5zws.png"
                        width = "50"
                        height = "50"
                        className = "d-inline-block align-top"
                        alt = "website-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                <Navbar.Collapse id = "responsive-navbar-nav">
                    <Nav className = "ms-auto">
                        <Nav.Link href = "#about">About</Nav.Link>
                        <Nav.Link href = "#education">Education</Nav.Link>
                        <Nav.Link href = "#experience">Experience</Nav.Link>
                        <Nav.Link href = "#certificates">Certificates</Nav.Link>
                        <Nav.Link href = "#seminars">Seminars</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar
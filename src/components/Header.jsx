import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, NavItem, Form, Container,Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
        <Navbar.Brand href="/home">MD.JEWEL MIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>           
            <Nav.Link href="/resume">Resume</Nav.Link>           
            <Nav.Link href="/projects">Projects</Nav.Link>           
            <Nav.Link href="/contact">Contact</Nav.Link>           
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
             Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}



export default Header;
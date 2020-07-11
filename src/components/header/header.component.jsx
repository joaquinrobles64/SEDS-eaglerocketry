import React from "react";

import { ReactComponent as Logo } from "../../assets/eaglerocketry-icon.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.style.scss";

const Header = () => (
  <Navbar collapseOnSelect expand="md" bg="light">
    <Navbar.Brand className="mr-auto" href="#home">
      <Logo className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="pl-md-4">
        <Nav.Link href="#feature s">OUTREACH</Nav.Link>
        <Nav.Link href="#pricing">TEAM</Nav.Link>
        <Nav.Link href="#something">SPONSORS</Nav.Link>
        <Nav.Link href="#something">CONTACT US</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="#features">SIGN IN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

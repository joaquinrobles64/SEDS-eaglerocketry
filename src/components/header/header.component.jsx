import React from "react";

import { ReactComponent as Logo } from "../../assets/eaglerocketry-icon.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./header.style.scss";

const Header = () => (
  <Navbar collapseOnSelect expand="md" bg="light" fixed="top">
    <Navbar.Brand className="mr-auto">
      <Logo className="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="pl-md-4">
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/outreach">OUTREACH</Nav.Link>
        <Nav.Link href="/team">TEAM</Nav.Link>
        <Nav.Link href="/sponsors">SPONSORS</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="/SIGNIN">SIGN IN/SIGNUP</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

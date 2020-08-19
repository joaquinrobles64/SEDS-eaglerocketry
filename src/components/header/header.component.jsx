import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { auth } from "../../firebase/firebase.util";

import { ReactComponent as Logo } from "../../assets/eaglerocketry-icon.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./header.style.scss";

const Header = ({ currentUser }) => (
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
        {currentUser ? (
          <div>
            <Nav.Link>{currentUser.displayName}</Nav.Link>
            <Nav.Link onClick={() => auth.signOut()}>SIGN OUT</Nav.Link>
          </div>
        ) : (
          <Nav.Link href="/signin">SIGN IN</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

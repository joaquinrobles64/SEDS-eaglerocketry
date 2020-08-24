import React from "react";

import { Link } from "react-router-dom";
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
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/outreach" className="nav-link">
          OUTREACH
        </Link>
        <Link to="/team" className="nav-link">
          TEAM
        </Link>
        <Link to="/sponsors" className="nav-link">
          SPONSORS
        </Link>
      </Nav>
      <Nav className="ml-auto">
        {currentUser ? (
          <Link to="/myaccount" className="nav-link">
            MY ACCOUNT
          </Link>
        ) : null}
        {currentUser ? (
          <div className="nav-link" onClick={() => auth.signOut()}>
            SIGN OUT <i class="fas fa-sign-out"></i>
          </div>
        ) : (
          <Link to="/signin" className="nav-link">
            SIGN IN <i class="fas fa-sign-in"></i>
          </Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

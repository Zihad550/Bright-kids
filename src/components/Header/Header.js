import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/BrightKids.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="white" className="m-0 p-0" expand="lg" sticky="top">
      <Container className="p-0 ">
        <Navbar.Brand className="nav-brand" href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavLink className="nav-link py-3" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link py-3" to="/classes">
              All Classes
            </NavLink>
            <NavLink className="nav-link py-3" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link py-3" to="/contact">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

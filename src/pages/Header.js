import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar
      bg="black"
      variant="dark"
      fixed="top"
      className="d-flex justify-content-around"
    >
      <div>
        <Navbar.Brand href="#home" className="text-white">
          TASK MANAGER
        </Navbar.Brand>
      </div>
      <div>
        <Nav className="me-auto">
          <Nav.Link className="text-white">
            <NavLink
              to="/api/u/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </NavLink>
          </Nav.Link>
        </Nav>
      </div>
      <div>
        <Nav>
          <Nav.Link className="text-white">
            <NavLink
              to="/api/signup"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Sign Up
            </NavLink>
          </Nav.Link>
          <Nav.Link className="text-white">
            <NavLink
              to="/api/signin"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Sign In
            </NavLink>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
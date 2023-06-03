import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const context = useContext(AuthContext);

  const handleLogOut = () => {
    context.setUser({uid: ""});
  }

  return (
    <Navbar
      bg="black"
      variant="dark"
      fixed="top"
      className="d-flex justify-content-around"
    >
      <div>
        <Navbar.Brand href="#home" className="text-white">
        <NavLink
              to="/u/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
          TASK MANAGER
          </NavLink>

        </Navbar.Brand>
      </div>
      <Nav>
        {context.user?.uid ? (
          <Nav.Link className="text-white">
            <NavLink style={{ color: "inherit", textDecoration: "inherit" }} onClick={handleLogOut} to="/u/signin">
              Logout
            </NavLink>
          </Nav.Link>
        ) : (
          <div className="d-flex">
            <Nav.Link className="text-white">
              <NavLink
                to="/u/signup"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Sign Up
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white">
              <NavLink
                to="/u/signin"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Sign In
              </NavLink>
            </Nav.Link>
          </div>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;

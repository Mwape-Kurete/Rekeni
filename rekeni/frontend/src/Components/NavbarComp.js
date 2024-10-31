import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../Services/UserContext";

import "../Styles/ComponentStyles/navbar.css";

function NavbarComp() {
  const { user, setUser } = useContext(UserContext);

  //const navigate = useNavigate();

  const logoutHandler = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem("user"); // Clear any stored user data in localStorage
    localStorage.removeItem("userId"); // Remove the user ID if stored separately
  };

  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" className="navbar-full-cont">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text" as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/new">
              NEW
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/discover">
              DISCOVER
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Form className="d-flex justify-content-center align-items-center entire-search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-form"
                aria-label="Search"
              />
              <Button as={Link} to="/searchGen" className="search-gen">
                Search
              </Button>
            </Form>
          </Nav>
          <Nav className="me-auto">
            {user ? (
              // fragment for multipleelements inside a single conditional branch
              <>
                <Nav.Link className="nav-text" as={Link} to="/profile">
                  Profile
                </Nav.Link>

                <Nav.Link
                  className="nav-text"
                  onClick={logoutHandler}
                  as={Link}
                  to="/login"
                >
                  LOGOUT
                </Nav.Link>
              </>
            ) : (
              <Nav.Link className="nav-text" as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarComp;

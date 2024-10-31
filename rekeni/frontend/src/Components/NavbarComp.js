import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { UserContext } from "../Services/UserContext";

import "../Styles/ComponentStyles/navbar.css";

function NavbarComp() {
  const { user } = useContext(UserContext);

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
            {user.userId ? (
              // fragment for multipleelements inside a single conditional branch
              <>
                <Nav.Link className="nav-text" as={Link} to="/profile">
                  Profile
                </Nav.Link>

                <Nav.Link className="nav-text" as={Link} to="/login">
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

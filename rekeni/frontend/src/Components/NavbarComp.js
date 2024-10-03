import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/new">
              New Rekenis
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/discover">
              Discover
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button as={Link} to="/searchGen">
                Search
              </Button>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link className="nav-text" as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="nav-text" as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

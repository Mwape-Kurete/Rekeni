import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";

import "../Styles/main.css";

function Discover() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
    </Container>
  );
}

export default Discover;

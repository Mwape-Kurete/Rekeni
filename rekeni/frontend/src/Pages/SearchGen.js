import React from "react";
import "../Styles/main.css";

import NavbarComp from "../Components/NavbarComp";

import { Container, Row, Col } from "react-bootstrap";

function SearchGen() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
    </Container>
  );
}

export default SearchGen;

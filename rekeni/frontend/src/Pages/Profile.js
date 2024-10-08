import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import TopStackComp from "../Components/TopStackComp";

import "../Styles/main.css";

function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
        <Col xs={12}>
          <TopStackComp />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

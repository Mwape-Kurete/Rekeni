import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../Styles/ComponentStyles/ai-search-sect.css";

function DiscoverSearchCardComp() {
  return (
    <Container>
      <Row className="ai-containter">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center entire-search"
        >
          <h1 className="discover-ask-title  text-align-center">
            Ask Rekeni A.I for album recommendations
          </h1>
        </Col>
        <Col xs={12}>
          <Form className="d-flex justify-content-center align-items-center entire-search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-form"
              aria-label="Search"
            />
            <Button className="search-discover">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default DiscoverSearchCardComp;

import React from "react";

import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../Styles/ComponentStyles/ai-search-sect.css";

function DiscoverSearchCardComp() {
  return (
    <div className="ai-whole-container d-flex justify-content-center align-items-center entire-search">
      <Row className="ai-containter">
        <Col
          xs={12}
          className="entire-search d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 className="discover-ask-title text-align-center">
              Ask Rekeni A.I for album recommendations
            </h1>
          </div>
        </Col>
        <Col xs={12}>
          <Form className="d-flex justify-content-center align-items-center entire-search-discover">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-form search-discover"
              aria-label="Search"
            />
            <Button className="search-discover-button">Search</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default DiscoverSearchCardComp;

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Styles/ComponentStyles/LoginformComp.css";

function LoginFormComp() {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <h1 className="login-header text-align-center d-flex justify-content-center align-items-center">
            Login
          </h1>
          <Form className="login-form-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="login-signup-inputs"
              />
              <Form.Text className="sub-text">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="login-signup-inputs"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <Link to="/signup" className="signup-login-hyperlink">
                have an account? login Now!
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginFormComp;

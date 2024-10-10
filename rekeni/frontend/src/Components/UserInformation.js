import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

import "../Styles/ComponentStyles/userInfo.css";

function UserInformation() {
  return (
    <Container>
      <Row className="pfp-name d-flex justify-content-center align-items-center">
        <Col xs={2}>
          <img
            className="profile-pic-profpg"
            src={placeholderImg}
            alt="users profile photo"
          />
        </Col>
        <Col xs={4} className="user-info">
          <h1 className="username">
            @<span>username</span>
          </h1>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
            deserunt dicta optio nihi.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInformation;

import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../Services/UserContext";
import "../Styles/ComponentStyles/userInfo.css";

function UserInformation() {
  const { user } = useContext(UserContext);

  // Check if user data is available
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row className="pfp-name d-flex justify-content-center align-items-center">
        <Col xs={4} className="user-info">
          <h2 className="username">
            @<span>{user.username}</span>
          </h2>
          <p className="bio">{user.bio}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default UserInformation;

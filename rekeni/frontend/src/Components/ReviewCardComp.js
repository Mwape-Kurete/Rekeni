import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import "../Styles/ComponentStyles/reviewcard.css";

import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function ReviewCardComp() {
  return (
    <Card className="review-card d-flex flex-row">
      <Col className="col-6 d-flex align-items-center review-card-img-cont">
        <Card.Img
          variant="top"
          src={placeholderImg}
          className="review-card-img"
        />
      </Col>
      <Col className="review-card-body col-6 d-flex align-items-center">
        <Card.Body>
          <Card.Title>Album Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Col className="username-handle">
            <Card.Text>
              <small>
                <span>@username</span>
              </small>
            </Card.Text>
          </Col>
          <Col className="timestamp-review">
            <Card.Text>
              <small>
                <span>00:00 01/01/2024</span>
              </small>
            </Card.Text>
          </Col>
          <Button className="like-button">
            <i className="bi bi-heart-fill"></i>
          </Button>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default ReviewCardComp;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
        <Card.Body className="card-body-content-review">
          <Card.Title className="album-title">Album Title</Card.Title>
          {/* Rating Section */}
          <div class="d-flex align-items-center stars-rating">
            {/* Filled Stars (for a rating of 3 out of 5) */}
            <i class="bi bi-star-fill text-warning rating-stars"></i>
            <i class="bi bi-star-fill text-warning rating-stars"></i>
            <i class="bi bi-star-fill text-warning rating-stars"></i>
            {/* Unfilled Stars */}
            <i class="bi bi-star-fill rating-stars"></i>
            <i class="bi bi-star-fill rating-stars"></i>
            <span
              class="ms-2 written-rating
            "
            >
              (3/5)
            </span>
          </div>
          {/* End Of Rating Section */}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Row className="user-information">
            <Col className="username-handle">
              <Card.Text>
                <small>
                  <span>@username</span>
                </small>
              </Card.Text>
            </Col>
            <Col className="timestamp-review d-flex justify-content-end">
              <Card.Text>
                <small>
                  <span>00:00 01/01/2024</span>
                </small>
              </Card.Text>
            </Col>
          </Row>
          <Row className="like-btn">
            <Col className="col-12 d-flex justify-content-end">
              <Button className="like-button">
                <i className="bi bi-heart-fill custom-color"></i>
              </Button>
              <p className="no-likes">
                <span>0</span> Likes
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Col>
    </Card>
  );
}

export default ReviewCardComp;

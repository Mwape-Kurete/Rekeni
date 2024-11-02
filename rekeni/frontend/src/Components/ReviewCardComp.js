import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useLocation } from "react-router-dom";

import "../Styles/ComponentStyles/reviewcard.css";

import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function ReviewCardComp({ allReviews }) {
  const location = useLocation();

  const isSingleAlbumPage = location.pathname.includes("singleAlbum");
  const isProfilePage = location.pathname.includes("profile");
  const isHomePage = location.pathname === "/";

  return (
    <>
      {allReviews.map((review) => (
        <Card className="review-card d-flex flex-row mb-3" key={review._id}>
          {/* Conditionally render the album cover only on non-single album pages */}
          {!isSingleAlbumPage && (
            <Col className="col-6 d-flex align-items-center review-card-img-cont">
              <Card.Img
                variant="top"
                src={review.albumArtwork || placeholderImg}
                className="review-card-img"
              />
            </Col>
          )}
          <Col
            className={`review-card-body ${
              isSingleAlbumPage ? "col-12" : "col-6"
            } d-flex align-items-center`}
          >
            <Card.Body className="card-body-content-review">
              <Card.Title className="album-title">
                {review.albumTitle}
              </Card.Title>

              {/* Rating Section */}
              <div className="d-flex align-items-center stars-rating">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`bi ${
                      index < review.rating
                        ? "bi-star-fill text-warning"
                        : "bi-star"
                    } rating-stars`}
                  ></i>
                ))}
                <span className="ms-2 written-rating">({review.rating}/5)</span>
              </div>

              <Card.Text>{review.content}</Card.Text>

              {/* User information */}
              <Row className="user-information">
                <Col className="username-handle">
                  <Card.Text>
                    <small>
                      <span>@{review.username}</span>
                    </small>
                  </Card.Text>
                </Col>
                <Col className="timestamp-review d-flex justify-content-end">
                  <Card.Text>
                    <small>
                      <span>{new Date(review.createdAt).toLocaleString()}</span>
                    </small>
                  </Card.Text>
                </Col>
              </Row>

              {/* Conditional actions for profile page */}
              {isProfilePage && (
                <Row className="mt-2">
                  <Col className="d-flex justify-content-end">
                    <Button variant="warning" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </Col>
                </Row>
              )}

              {/* Like button */}
              <Row className="like-btn">
                <Col className="col-12 d-flex justify-content-end">
                  <Button className="like-button">
                    <i className="bi bi-heart-fill custom-color"></i>
                  </Button>
                  <p className="no-likes py-1">
                    <span>{review.likes}</span> Likes
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Card>
      ))}
    </>
  );
}

export default ReviewCardComp;

//Single artist page top container, whole component
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import ReviewCardComp from "./ReviewCardComp";

import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/single-album-comp.css";

function AlbumSectComp() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submitting an empty comment
    if (comment.trim() === "") {
      return;
    }

    // Add the new comment to the list
    setComments([comment, ...comments]);
    setComment(""); // Clear the input box
  };
  return (
    <div className="whole-container-albs">
      <Row>
        <Col className="albs-info">
          <div className="albs-img-cont">
            <img
              src={placeholderImg}
              alt="single album cover"
              className="single-albs-cover"
            />
          </div>
          <div className="albs-meta">
            <h2 className="album-title text-center">
              Selected Album:{" "}
              <span className="single-album-name">Album Name</span>
            </h2>
            <h5 className="artist-title">
              Artist: <span className="single-artist-name">Artist Name</span>
            </h5>
            <p className="year-title">
              Release Year: <span className="single-year">0000</span>
            </p>
          </div>
        </Col>
        <Col className="leave-review">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <div class="d-flex align-items-center stars-rating">
                {/* Filled Stars (for a rating of 3 out of 5) */}
                <i class="bi bi-star-fill text-warning rating-stars"></i>
                <i class="bi bi-star-fill text-warning rating-stars"></i>
                <i class="bi bi-star-fill text-warning rating-stars"></i>
                {/* Unfilled Stars */}
                <i class="bi bi-star-fill rating-stars"></i>
                <i class="bi bi-star-fill rating-stars"></i>
                {/* end of rating section */}
              </div>
            </Form.Group>
            <Form.Group controlId="commentBox">
              <Form.Control
                type="text"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AlbumSectComp;

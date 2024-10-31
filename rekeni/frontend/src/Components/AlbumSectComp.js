import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/single-album-comp.css";
import "../Styles/ComponentStyles/album-tile.css";

function AlbumSectComp() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
    handleClose(); // Close the modal after submission
  };

  return (
    <div className="whole-container-albs">
      <Row>
        <Col className="albs-info d-flex">
          <div className="albs-img-cont">
            <img
              src={placeholderImg}
              alt="single album cover"
              className="single-albs-cover"
            />
          </div>
          <div className="flex-column albs-action">
            <div className="albs-meta px-2 py-3">
              <h2 className="album-title">
                <span className="single-album-name"> Album Name</span>
              </h2>
              <h5 className="artist-title">
                By: <span className="single-artist-name">Artist Name</span>
              </h5>
              <p className="year-title">
                Released: <span className="single-year">0000</span>
              </p>
            </div>
            <div className="leave-review">
              {/* Button to show the review modal */}
              <Button onClick={handleShow} className="mb-3 leave-reviewBTN">
                Leave Your Review
              </Button>

              {/* Review Modal */}
              <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Leave a Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <div className="d-flex align-items-center stars-rating">
                        {/* Filled Stars (for a rating of 3 out of 5) */}
                        <i className="bi bi-star-fill text-warning rating-stars"></i>
                        <i className="bi bi-star-fill text-warning rating-stars"></i>
                        <i className="bi bi-star-fill text-warning rating-stars"></i>
                        {/* Unfilled Stars */}
                        <i className="bi bi-star-fill rating-stars"></i>
                        <i className="bi bi-star-fill rating-stars"></i>
                        {/* end of rating section */}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="commentBox">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Write your review..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Form.Group>
                    <Button type="submit" className="mt-2 submitReviewBTN">
                      Submit
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
            <div className="d-flex favsBTNcont">
              <Button className="mb-3 addToFavs">Add To Your Favourites</Button>
            </div>
          </div>
        </Col>
        <Col className="col-4">
          <div className="abls-top-cont">
            <div className="avg-rating text-center">
              <h1>5 Stars</h1>
            </div>
            <div className="top-review">
              <div className="username">
                <p>
                  @<span>username</span>
                </p>
              </div>
              <div className="review">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatum earum mollitia? Repudiandae alias cumque eum. Nobis
                  omnis nostrum explicabo itaque excepturi et dolor error
                  inventore debitis placeat! Unde, doloribus.
                </p>
                <div className="d-flex align-items-center stars-rating">
                  {/* Filled Stars (for a rating of 3 out of 5) */}
                  <i className="bi bi-star-fill text-warning rating-stars"></i>
                  <i className="bi bi-star-fill text-warning rating-stars"></i>
                  <i className="bi bi-star-fill text-warning rating-stars"></i>
                  {/* Unfilled Stars */}
                  <i className="bi bi-star-fill rating-stars"></i>
                  <i className="bi bi-star-fill rating-stars"></i>
                  {/* end of rating section */}
                </div>
                <p>
                  0 <span>likes</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AlbumSectComp;

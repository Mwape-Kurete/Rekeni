import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/single-album-comp.css";
import "../Styles/ComponentStyles/album-tile.css";
import axios from "axios";
import { UserContext } from "../Services/UserContext";

function AlbumSectComp({ singleAlbum }) {
  const { user } = useContext(UserContext);
  const albumId = singleAlbum._id;

  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const [existingReview, setExistingReview] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      // Fetch existing review for this album by the logged-in user
      axios
        .get(`/api/review/${albumId}/${user.userId}`)
        .then((response) => {
          if (response.data) {
            setExistingReview(response.data);
            setContent(response.data.content);
            setRating(response.data.rating);
          }
        })
        .catch((error) => {
          console.error("Error fetching existing review:", error);
        });

      // Fetch user's favourites
      axios
        .get(`/api/favourites/${user.userId}`)
        .then((response) => {
          setFavourites(response.data || []);
        })
        .catch((error) => {
          console.error("Error fetching favourites:", error);
        });
    }
  }, [albumId, user]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setContent(existingReview ? existingReview.content : "");
    setRating(existingReview ? existingReview.rating : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      albumId,
      userId: user.userId,
      content,
      rating,
    };

    try {
      if (existingReview) {
        await axios.put(`/api/review/${existingReview._id}`, reviewData);
      } else {
        await axios.post("/api/review", reviewData);
      }
      setNewReview("");
      handleClose();

      // Auto-refresh the page
      window.location.reload(); // Refreshes the entire page
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleAddToFavourites = async () => {
    if (favourites.some((fav) => fav.albumId === albumId)) {
      alert("This album is already in your favourites.");
      return;
    }
    if (favourites.length >= 5) {
      alert("You can only have up to 5 favourite albums.");
      return;
    }

    try {
      const newFavourite = {
        albumId,
        title: singleAlbum.title,
        artist: singleAlbum.artist,
      };
      await axios.post(`/api/favourites/${albumId}`, {
        userId: user.userId,
        ...newFavourite,
      });
      setFavourites((prevFavourites) => [...prevFavourites, newFavourite]);
      alert("Album added to favourites!");
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (existingReview) {
        await axios.delete(`/api/review/${existingReview._id}`);
        setExistingReview(null);
        setContent("");
        setRating("");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="whole-container-albs">
      <Row>
        <Col className="albs-info d-flex">
          <div className="albs-img-cont">
            <img
              src={singleAlbum.artworkUrl || placeholderImg}
              alt={`${singleAlbum.title || "Album"} album cover`}
              className="single-albs-cover"
            />
          </div>
          <div className="flex-column albs-action">
            <div className="albs-meta px-2 py-3">
              <h2 className="album-title">
                <span className="single-album-name"> {singleAlbum.title}</span>
              </h2>
              <h5 className="artist-title">
                By:{" "}
                <span className="single-artist-name">{singleAlbum.artist}</span>
              </h5>
              <p className="year-title">
                Released:{" "}
                <span className="single-year">{singleAlbum.releaseDate}</span>
              </p>
            </div>
          </div>
        </Col>
        <Col className="user-reviews-sect">
          {user ? (
            <>
              {existingReview ? (
                <div className="top-review">
                  <div className="username">
                    <p>
                      Your Review: <span>@{user.username}</span>
                    </p>
                  </div>
                  <div className="review">
                    <p>{existingReview.content}</p>
                    <div className="d-flex align-items-center stars-rating">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`bi ${
                            index < existingReview.rating
                              ? "bi-star-fill text-warning"
                              : "bi-star"
                          } rating-stars`}
                        ></i>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between mt-2 align-items-end">
                      <Button
                        variant="warning"
                        onClick={handleShow}
                        className="editReviewBTN"
                      >
                        Edit Review
                      </Button>
                      <Button
                        variant="danger"
                        onClick={handleDelete}
                        className="deleteReviewBTN"
                      >
                        Delete Review
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center leave-review">
                  <Button onClick={handleShow} className="mb-3 leave-reviewBTN">
                    Leave Your Review
                  </Button>
                </div>
              )}
              <div className="d-flex justify-content-center align-items-center favsBTNcont">
                <Button
                  className="mb-3 addToFavs"
                  onClick={handleAddToFavourites}
                >
                  Add To Your Favourites
                </Button>
              </div>
              {/* Review Modal */}
              <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {existingReview ? "Edit Your Review" : "Leave a Review"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="number"
                        max={5}
                        min={1}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="commentBox" className="mt-3">
                      <Form.Label>Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Write your review..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      type="submit"
                      className="mt-2 submitReviewBTN text-center"
                    >
                      {existingReview ? "Update" : "Submit"}
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <div className="login-prompt text-center">
              <h6>Login or Create an Account to Leave a Review & More</h6>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AlbumSectComp;

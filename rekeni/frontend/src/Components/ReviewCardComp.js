import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import { UserContext } from "../Services/UserContext";
import "../Styles/ComponentStyles/reviewcard.css";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

function ReviewCardComp({ allReviews }) {
  const location = useLocation();
  const { user } = useContext(UserContext); // Assume user context provides userId
  const userId = user?.userId || null;

  const [reviewData, setReviewData] = useState(allReviews);

  const handleLike = async (reviewId) => {
    try {
      const response = await axios.post(`/api/review/${reviewId}/like`, {
        userId,
      });
      setReviewData((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId
            ? {
                ...review,
                likes: response.data.likes,
                likedBy: response.data.likedBy,
              }
            : review
        )
      );
    } catch (error) {
      console.error("Error liking the review: ", error);
    }
  };

  const handleUnlike = async (reviewId) => {
    try {
      const response = await axios.post(`/api/review/${reviewId}/unlike`, {
        userId,
      });
      setReviewData((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId
            ? {
                ...review,
                likes: response.data.likes,
                likedBy: response.data.likedBy,
              }
            : review
        )
      );
    } catch (error) {
      console.error("Error unliking the review: ", error);
    }
  };

  // Conditional rendering if there are no reviews
  if (!reviewData || reviewData.length === 0) {
    return <p className="text-center mt-3">No reviews available.</p>;
  }

  return (
    <>
      {reviewData.map((review) => {
        const userHasLiked = review.likedBy.includes(userId);
        const isProfilePage = location.pathname.includes("profile");

        return (
          <Card
            className="review-card d-flex flex-row mb-3"
            key={review?._id || Math.random()}
          >
            {!location.pathname.includes("singleAlbum") && (
              <Col className="col-6 d-flex align-items-center review-card-img-cont">
                <Card.Img
                  variant="top"
                  src={review?.album?.artworkUrl || placeholderImg}
                  className="review-card-img"
                />
              </Col>
            )}
            <Col
              className={`review-card-body ${
                location.pathname.includes("singleAlbum") ? "col-12" : "col-6"
              } d-flex align-items-center`}
            >
              <Card.Body className="card-body-content-review">
                <Card.Title className="album-title">
                  {review?.album?.title || "Unknown Album"}
                </Card.Title>
                <div className="d-flex align-items-center stars-rating">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`bi ${
                        index < (review?.rating || 0)
                          ? "bi-star-fill text-warning"
                          : "bi-star"
                      } rating-stars`}
                    ></i>
                  ))}
                  <span className="ms-2 written-rating">
                    ({review?.rating || 0}/5)
                  </span>
                </div>
                <Card.Text>
                  {review?.content || "No content available"}
                </Card.Text>
                {!isProfilePage && (
                  <Row className="user-information">
                    <Col className="username-handle">
                      <Card.Text>
                        <small>
                          <span>
                            @{review?.user?.username || "Unknown User"}
                          </span>
                        </small>
                      </Card.Text>
                    </Col>
                    <Col className="timestamp-review d-flex justify-content-end">
                      <Card.Text>
                        <small>
                          <span>
                            {new Date(
                              review?.createdAt || Date.now()
                            ).toLocaleString()}
                          </span>
                        </small>
                      </Card.Text>
                    </Col>
                  </Row>
                )}
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
                <Row className="like-btn">
                  <Col className="col-12 d-flex justify-content-end">
                    <Button
                      className="like-button"
                      onClick={() =>
                        userHasLiked
                          ? handleUnlike(review._id)
                          : handleLike(review._id)
                      }
                    >
                      <i
                        className={`bi ${
                          userHasLiked
                            ? "bi-heart-fill custom-color"
                            : "bi-heart"
                        }`}
                      ></i>
                    </Button>
                    <p className="no-likes py-1">
                      <span>{review?.likes || 0}</span> Likes
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Card>
        );
      })}
    </>
  );
}

export default ReviewCardComp;

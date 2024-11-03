import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import ReviewCardComp from "../Components/ReviewCardComp";
import NewAlbumCardComp from "../Components/NewAlbumsCardComp";
import FooterComp from "../Components/FooterComp";
import RatingsCardComp from "../Components/RatingsCardComp";
import AlbumCaroComp from "../Components/AlbumCaroComp";

import "../Styles/main.css";

function New() {
  const location = useLocation();
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [mostReviewed, setmostReviewed] = useState([]);

  useEffect(() => {
    const fetchTopReviews = async () => {
      try {
        const response = await axios.get(`/api/review`);

        console.log("response for fetch home reviews: ", response.data);

        setAllReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.error("Error Fetching Top Reviews: ", error);
      }
    };

    const fetchMostReviewed = async () => {
      try {
        const response = await axios.get("/api/fetchAlbum/most-reviewed");

        console.log("response for fetch most reviewed: ", response.data);
        setmostReviewed();
      } catch (error) {
        console.log(error);
        console.error("Error Fetching Top Reviews: ", error);
      }
    };

    fetchTopReviews();
    fetchMostReviewed();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <NavbarComp />
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="gy-3 recents">
          <h1 className="recent-revs-header">Recent Reviews</h1>
          <div className="review-container">
            <ReviewCardComp allReviews={allReviews} location={location} />
          </div>
        </Col>
        <Col xs={3} className="gy-3 new-albs-sect">
          <h1 className="recent-revs-header">Most Reviewed</h1>
          <div className="d-flex justify-content-end new-albums mb-3">
            <NewAlbumCardComp albumProps={mostReviewed} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="gy-3 popular ">
          <h1 className="recent-revs-header">New Album Recommendations</h1>
          <div className="popular-albums">
            <AlbumCaroComp />
            <AlbumCaroComp />
            <AlbumCaroComp />
            <AlbumCaroComp />
            <AlbumCaroComp />
          </div>
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default New;

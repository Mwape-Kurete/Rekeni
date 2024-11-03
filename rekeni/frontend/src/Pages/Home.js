import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Col, Row, Container } from "react-bootstrap";

import NavbarComp from "../Components/NavbarComp";
import JumbotronComp from "../Components/JumbotronComp";
import ReviewcCardComp from "../Components/ReviewCardComp";
import AlbumCaroComp from "../Components/AlbumCaroComp";
import FooterComp from "../Components/FooterComp";

import "../Styles/main.css";

function Home() {
  const location = useLocation();
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopReviews = async () => {
      try {
        const response = await axios.get(`/api/review/top-reviews`);

        console.log("response for fetch home reviews: ", response.data);

        setAllReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.error("Error Fetching Top Reviews: ", error);
      }
    };

    fetchTopReviews();
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
        <Col xs={12}>
          <JumbotronComp />
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="review-sect-home">
          <h1 className="home-titles">Quickview: Top Reviews</h1>
          <ReviewcCardComp allReviews={allReviews} location={location} />
        </Col>
        <Col xs={4} className="album-sect-home ">
          <h1 className="home-titles">Quickview: Highly Rated Albums</h1>
          <div className="popular-albums">
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

export default Home;

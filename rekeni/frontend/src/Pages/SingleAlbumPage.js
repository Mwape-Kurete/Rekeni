import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";
import ReviewCardComp from "../Components/ReviewCardComp";
import AlbumSectComp from "../Components/AlbumSectComp";

import { Container, Row, Col } from "react-bootstrap";

function SingleAlbumPage() {
  //for loading single album
  const location = useLocation();
  const [singleAlbum, setSingleAlbum] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(true);
  const query = new URLSearchParams(location.search).get("query");

  //for loading reviews
  const [allReviews, setAllReviews] = useState([]);
  const [albumId, setAlbumId] = useState("");

  useEffect(() => {
    const fetchSingleAlbum = async () => {
      try {
        const response = await axios.get(`/api/fetchAlbum/${query}`);

        setSingleAlbum(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.error("Error Fetching this albums data: ", error);
      }
    };

    const fetchReviews = async () => {
      setAlbumId(singleAlbum._id);

      try {
        const response = await axios.get(`/api/review/${albumId}`);
        console.log("Fetched reviews:", response.data);
        setAllReviews(response.data);
      } catch (error) {
        console.error("There was an error fetching reviews: ", error);
      }
    };

    fetchSingleAlbum();
    fetchReviews();
  }, [query, albumId]);

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
      <Row className="whole-single-ablum-info">
        <Col xs={12} className="single-album-info-container">
          <AlbumSectComp singleAlbum={singleAlbum} />
        </Col>
      </Row>
      <Row className="review-section-single">
        <Col className="review-single-cont col-6">
          <ReviewCardComp allReviews={allReviews} location={location} />
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default SingleAlbumPage;

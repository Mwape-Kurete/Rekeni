import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import NavbarComp from "../Components/NavbarComp";
import FooterComp from "../Components/FooterComp";
import ReviewCardComp from "../Components/ReviewCardComp";
import AlbumSectComp from "../Components/AlbumSectComp";

import { Container, Row, Col } from "react-bootstrap";

function SingleAlbumPage() {
  const location = useLocation();
  const [singleAlbum, setSingleAlbum] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(true);
  const query = new URLSearchParams(location.search).get("query");

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
    fetchSingleAlbum();
  }, [query]);

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
        <Col xs={12} className="review-single-cont">
          <ReviewCardComp />
        </Col>
      </Row>
      <footer>
        <FooterComp />
      </footer>
    </Container>
  );
}

export default SingleAlbumPage;

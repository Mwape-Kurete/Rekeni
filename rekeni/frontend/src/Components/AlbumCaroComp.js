import React from "react";
import Card from "react-bootstrap/Card";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";

import "../Styles/ComponentStyles/albumcarocard.css";

function AlbumCaroComp() {
  return (
    <Card style={{ width: "18rem" }} className="bg-dark album-overlays">
      <Card.Img src={placeholderImg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Album title</Card.Title>
        <Card.Text>
          by: <span className="artist-name">artist name</span>
        </Card.Text>
        <Card.Text>release date</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default AlbumCaroComp;

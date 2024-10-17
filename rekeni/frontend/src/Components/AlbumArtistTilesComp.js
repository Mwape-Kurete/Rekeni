import React from "react";
import { Card, Button } from "react-bootstrap";
import placeholderImg from "../Asset/pexels-scenicspire-358690216-28216688.jpg";
import "../Styles/ComponentStyles/album-tile.css"; // Make sure to create and style this CSS file

function AlbumArtistTileComp() {
  const handleRemove = () => {
    console.log("Card removed");
    // Add logic to remove or close the card here
  };

  return (
    <Card className="custom-card">
      <Card.Img src={placeholderImg} alt="Album cover" className="card-img" />
      <Button
        variant="light"
        className="close-btn"
        onClick={handleRemove}
        aria-label="Close"
      >
        <i className="bi bi-x"></i>
      </Button>
    </Card>
  );
}

export default AlbumArtistTileComp;

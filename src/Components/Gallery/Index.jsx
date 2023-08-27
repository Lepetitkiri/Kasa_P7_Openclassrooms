import React from "react";
import GalleryStyle from "../Gallery/Style.jsx";
import GalleryCard from "../Card/Index.jsx";

function Gallery() {
  return (
    <GalleryStyle className="gallery__home">
      <GalleryCard />
    </GalleryStyle>
  );
}

export default Gallery;
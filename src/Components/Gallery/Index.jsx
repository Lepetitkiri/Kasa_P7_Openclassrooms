import React from "react";
import GalleryStyle from "../Gallery/Style.jsx";
import GalleryCard from "../Card/Index.jsx";

function Gallery() {
  return (
    <main>
      <GalleryStyle className="gallery__home">
        <GalleryCard />
      </GalleryStyle>
    </main>
  );
}

export default Gallery;
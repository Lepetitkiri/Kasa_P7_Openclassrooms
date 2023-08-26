import React from "react";
import GalleryStyle from "../Gallery/Style.jsx";
import GalleryCard from "../Card/Index.jsx";

function Gallery() {
  return (
    <GalleryStyle>
      <section className="gallery__home">
        <GalleryCard />
      </section>
    </GalleryStyle>
  );
}

export default Gallery;
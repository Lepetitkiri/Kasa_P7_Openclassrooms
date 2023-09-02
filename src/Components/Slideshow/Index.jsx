import React from "react";
import SlideshowStyled from './Style';

function Slideshow() {
  return (
    <SlideshowStyled>
      <img src='../Pictures/Image_de_test1.jpg' alt="alt de test 1" className="slideshow__picture"></img>
      <img src='../Pictures/Image_de_test2.jpg' alt="alt de test 2" className="slideshow__picture"></img>
      <img src='../Pictures/FlecheVersLaGauche.png' alt="Fleche vers la gauche" className="slideshow__leftArrow"></img>
      <p>1/2</p>
      <img src='../Pictures/FlecheVersLaDroite.png' alt="Fleche vers la droite" className="slideshow__rightArrow"></img>
    </SlideshowStyled>
  );
}

export default Slideshow;
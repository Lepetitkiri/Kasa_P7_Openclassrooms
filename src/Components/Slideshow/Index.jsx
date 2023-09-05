import React, { useState } from "react";
import SlideshowStyled from './Style';

const picture = [
  "../Pictures/Image_de_test1.jpg",
  "../Pictures/Image_de_test2.jpg"
];

function Slideshow() {

  {/*Initialisation du numéro de l'image courante dans le useState */ }
  const [currentPicture, setCurrentPicture] = useState(0);

  {/*Fonction permettant de définir l'indice précédent */ }
  function previousPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === 0 ? picture.length - 1 : prevIndex - 1));
  }
  {/*Fonction permettant de définir l'indice suivant */ }
  function nextPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === picture.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <SlideshowStyled>
      <img src={picture[currentPicture]} alt="alt de test 1" className="slideshow__picture" />
      <button className="slideshow__leftArrow" onClick={previousPicture}>
        <img src='../Pictures/FlecheVersLaGauche.png' alt="Fleche vers la gauche" />
      </button>
      <p>{currentPicture + 1} / {picture.length} </p>
      <button className="slideshow__rightArrow" onClick={nextPicture}>
        <img src='../Pictures/FlecheVersLaDroite.png' alt="Fleche vers la droite" />
      </button>
    </SlideshowStyled >
  );
}

export default Slideshow;
import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';

import { MyContextForBasenameValue } from '../../index';
import SlideshowStyled from './Style';

function Slideshow({ pictureArray, pictureAlt }) {

  const basename = useContext(MyContextForBasenameValue);

  // Initialisation du numéro de l'image courante dans le useState
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction permettant de définir l'indice précédent
  /**
   * Définit l'indice précédent de l'image courante.
   */
  function previousPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === 0 ? pictureArray.length - 1 : prevIndex - 1));
  }

  // Fonction permettant de définir l'indice suivant
  /**
   * Définit l'indice suivant de l'image courante.
   */
  function nextPicture() {
    setCurrentPicture((prevIndex) => (prevIndex === pictureArray.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <SlideshowStyled role="region" aria-label="Carousel principal">
      <img src={pictureArray[currentPicture]} alt={pictureAlt} className="slideshow__picture" />
      <button className="slideshow__leftArrow" onClick={previousPicture}>
        <img src={`${basename}/Pictures/FlecheVersLaGauche.png`} alt="Fleche vers la gauche" className="slideshow__leftArrow--Desktop" />
        <img src={`${basename}/Pictures/FlecheVersLaGaucheMobile.png`} alt="Fleche vers la gauche" className="slideshow__leftArrow--Mobile" />
      </button>
      <p >{currentPicture + 1} / {pictureArray.length} </p>
      <button className="slideshow__rightArrow" onClick={nextPicture}>
        <img src={`${basename}/Pictures/FlecheVersLaDroiteMobile.png`} alt="Fleche vers la droite" className="slideshow__rightArrow--Mobile" />
        <img src={`${basename}/Pictures/FlecheVersLaDroite.png`} alt="Fleche vers la droite" className="slideshow__leftArrow--Desktop" />
      </button>
    </SlideshowStyled >
  );
}

Slideshow.propTypes = {
  pictureArray: PropTypes.array,
  pictureAlt: PropTypes.string
};

export default Slideshow;
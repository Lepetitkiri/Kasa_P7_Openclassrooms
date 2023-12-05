import React from "react";
import RatingStyle from "./Style.jsx";
import PropTypes from "prop-types";

function Rating({ rating }) {

  const ratingNumber = parseInt(rating); // String -> Number

  const ratingArray = new Array(1, 1, 1, 1, 1);
  ratingArray.fill(0, ratingNumber); // Renvoi un array -> "1" si l'étoile est pleine et "0" si l'étoile est vide

  return (
    <RatingStyle className='presentation__host__rating'>
      {ratingArray.map((item, index) => (
        item === 1 ?
          <img key={`rating-star-${index}`} className='presentation__host__rating--full' src='../Pictures/EtoilePleine.png' alt='Etoile pleine'></img> :
          <img key={`rating-star-${index}`} className='presentation__host__rating--empty' src='../Pictures/EtoileVide.png' alt='Etoile vide'></img>
      ))}
    </RatingStyle >
  );
}

Rating.propTypes = {
  rating: PropTypes.string // Validation de la prop rating
};

export default Rating;
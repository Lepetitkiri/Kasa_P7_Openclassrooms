import React from "react";
import GalleryCardStyle from "../Card/Style.jsx";
import datas from '../../Ressources/housings.json';

function GalleryCard() {

  {/*Récupération des infos attendues à partir des datas JSON des locations*/ }
  const dataArrayForCards = datas.map(item => ({
    id: item.id,
    title: item.title,
    image: item.cover
  }));

  return (
    <>
      {dataArrayForCards.map(card => (
        <GalleryCardStyle key={`card-${card.id}`} >
          <p>{card.title}</p>
          <img src={card.image} alt={card.title} />
        </GalleryCardStyle >
      ))
      }
    </>
  );
}

export default GalleryCard;
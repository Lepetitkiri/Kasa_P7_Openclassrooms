import React from "react";
import GalleryCardStyle from "../Card/Style.jsx";
import datas from '../../Ressources/housings.json';

function GalleryCard() {

  /**
   * Fonction de récupération des infos concernant la location à partir des données JSON.
   * @param {Object} item Les données JSON représentant une location.
   * @param {string} item.id L'identifiant de la location.
   * @param {string} item.title Le titre de la location.
   * @param {string} item.cover L'URL de la couverture de la location.
   * @param {string[]} item.pictures Les URLs des images de la location.
   * @param {string} item.description La description de la location.
   * @param {Object} item.host Les informations sur l'hôte de la location.
   * @param {string} item.host.name Le nom de l'hôte.
   * @param {string} item.host.picture L'URL de la photo de l'hôte.
   * @param {string} item.rating Le classement de la location.
   * @param {string} item.location L'emplacement de la location.
   * @param {string[]} item.equipments Les équipements fournis avec la location.
   * @param {string[]} item.tags Les tags associés à la location.
   */
  const dataArrayForCards = datas.map(item => ({
    id: item.id,
    title: item.title,
    image: item.cover
  }));

  return (
    <>
      {dataArrayForCards.map(card => (
        <GalleryCardStyle key={`card-${card.id}`} to={`../housing/${card.id}`} >
          <p>{card.title}</p>
          <img src={card.image} alt={card.title} />
          <div></div> {/*Div contenant le dégradé de couleur*/}
        </GalleryCardStyle >
      ))
      }
    </>
  );
}

export default GalleryCard;
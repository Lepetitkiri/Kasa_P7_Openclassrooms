import React from "react";
import GalleryCardStyle from "../Card/Style.jsx";
import datas from '../../Ressources/housings.json';

{/*Creation d'un Array contenant uniquement les titres des locations à partir des datas JSON*/ }
let dataArrayTitles = datas.map(item => item.title);
{/*Creation d'un Array contenant uniquement les images de couverture à partir des datas JSON*/ }
let dataArrayCover = datas.map(item => item.cover);

function GalleryCard() {
  return (
    <div>{
      /*Premier mappage : à partir du tableau contenant les titres*/
      dataArrayTitles.map((title, index) => (

        /*Deuxieme mappage : à partir du tableau contenant les images de couverture*/
        dataArrayCover.map((cover, ind) => (

          < GalleryCardStyle key={`${index}${ind}`}> {title} + {cover} </GalleryCardStyle>
        )
        )
      ))
    } </div>
  );
}

export default GalleryCard;
import React from "react";
import GalleryCardStyle from "../Card/Style.jsx";
import datas from '../../Ressources/housings.json';


{/*Creation d'un Array contenant uniquement les titres des locations à partir des datas JSON*/ }
let dataArrayTitles = datas.map(item => item.title);

function GalleryCard() {
  return (
    <>
      {
        /*Premier mappage : à partir du tableau contenant les titres*/
        dataArrayTitles.map((title, index) => (

          < GalleryCardStyle key={`${index}`}> {title} </GalleryCardStyle>
        )
        )
      }
    </>
  );
}

export default GalleryCard;
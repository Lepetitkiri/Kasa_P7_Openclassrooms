import React from "react";
import PresentationStyle from "./Style.jsx";

{/*Components*/ }
import PresentationLocation from '../PresentationLocation/Index.jsx';
import PresentationHost from '../PresentationHost/Index.jsx';

function Presentation() {

  {/*Récupération des datas provenant du provider */ }

  return (
    <PresentationStyle className='presentationPart'>
      <PresentationLocation />
      <PresentationHost />
    </PresentationStyle >
  );
}

export default Presentation;
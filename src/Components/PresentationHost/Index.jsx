import React, { useContext } from "react";
import PresentationHostStyle from "./Style.jsx";

{/*Components*/ }
import HostPortrait from '../HostPortrait/Index.jsx';
import Rating from '../Rating/Index.jsx';

{/*Contextes du provider*/ }
import { MycontextFromHousingPageForPresentation } from '../../Pages/Housing';

function PresentationHost() {

  {/*Récupération des datas provenant du provider */ }
  const PresentationDatasFromContext = useContext(MycontextFromHousingPageForPresentation);

  return (
    <PresentationHostStyle className='presentation__host'>
      <HostPortrait hostName={PresentationDatasFromContext.hostName} hostPicture={PresentationDatasFromContext.hostPicture} />
      <Rating rating={PresentationDatasFromContext.rating} />
    </PresentationHostStyle >
  );
}

export default PresentationHost;
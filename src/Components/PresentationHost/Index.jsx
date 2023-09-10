import React, { useContext } from "react";
import PresentationHostStyle from "./Style.jsx";

{/*Components*/ }
import HostPortrait from '../HostPortrait/Index.jsx';
import Rating from '../Rating/Index.jsx';

{/*Contextes du provider*/ }
import { MycontextForHostPart } from '../../Pages/Housing';

function PresentationHost() {

  {/*Récupération des datas provenant du provider */ }
  const HostValueFromContext = useContext(MycontextForHostPart);

  return (
    <PresentationHostStyle className='presentation__host'>
      <HostPortrait hostName={HostValueFromContext.hostName} hostPicture={HostValueFromContext.hostPicture} />
      <Rating rating={HostValueFromContext.rating} />
    </PresentationHostStyle >
  );
}

export default PresentationHost;
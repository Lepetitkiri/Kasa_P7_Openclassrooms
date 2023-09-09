import React from "react";
import PresentationHostStyle from "./Style.jsx";

{/*Components*/ }
import HostPortrait from '../HostPortrait/Index.jsx';
import Rating from '../Rating/Index.jsx';

function PresentationHost() {

  return (
    <PresentationHostStyle className='presentation__host'>
      <HostPortrait hostName={housingData.host.name} hostPicture={housingData.host.picture} />
      <Rating rating={housingData.rating} />
    </PresentationHostStyle >
  );
}

export default PresentationHost;
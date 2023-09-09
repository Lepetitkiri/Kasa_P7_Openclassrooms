import React from "react";
import HostPortraitStyle from "./Style.jsx";
import PropTypes from "prop-types";

function HostPortrait({ hostName, hostPicture }) {

  {/*Récupération du nom de l'hote avec traitement des cas particulier (nom de famille contenant des espaces)*/ }
  const hostNameSplited = hostName.split(' '); //Coupe la chaine de caractère à chaque espace
  const hostFirstName = hostNameSplited.shift(); //Renvoi l'index 0 puis le supprime du tableau
  const hostLastName = hostNameSplited.join(' '); //Reconstitue une chaine de caractère à partir d'un tableau en ajoutant des esapces entre chaque index

  return (
    <HostPortraitStyle className='presentation__host__portrait'>
      <h3> {hostFirstName} <br /> {hostLastName} </h3>
      <img src={hostPicture} alt={`Portrait de ${hostName}`} ></img>
    </HostPortraitStyle >
  );
}

HostPortrait.propTypes = {
  hostName: PropTypes.string, // Validation de la prop hostName
  hostPicture: PropTypes.string // Validation de la prop hostPicture
};

export default HostPortrait;
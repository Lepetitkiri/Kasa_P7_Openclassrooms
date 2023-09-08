import React, { useState } from "react";
import PropTypes from "prop-types";
import DropdownStyle from "./Style.jsx";

function Dropdown({ title, text }) {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <DropdownStyle>
      <div className="dropdown__title">
        <h2> {title} </h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src='/Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img> : <img src='/Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>}
        </button>
      </div>
      {isOpen ? <div className="dropdown__datas"> <p> {text} </p> </div> : <div></div>}
    </DropdownStyle>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired, // Validation de la prop title
  text: PropTypes.oneOfType([
    PropTypes.string, // La prop text peut être une chaîne de caractères
    PropTypes.arrayOf(PropTypes.string), // Ou un tableau de chaînes de caractères
  ]).isRequired, // Validation de la prop text
};

export default Dropdown;
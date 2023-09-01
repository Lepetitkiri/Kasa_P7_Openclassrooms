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
          {isOpen ? <img src='./Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img> : <img src='./Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>}
        </button>
      </div>
      {isOpen ? <div className="dropdown__datas"> {text} </div> : <div></div>}
    </DropdownStyle>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired, // Validation de la prop title
  text: PropTypes.string.isRequired // Validation de la prop tile
};

export default Dropdown;
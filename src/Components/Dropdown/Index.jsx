import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import DropdownStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

function Dropdown({ page, title, text }) {

  const basename = useContext(MyContextForBasenameValue);

  const [isOpen, setIsOpen] = useState(false);

  return (

    <DropdownStyle className={`dropdown--${page}`}>
      <div className={`dropdown__title dropdown__title--${page}`} >
        <h2> {title} </h2>
        <button aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {/*Ternaire permettant d'afficher une flèche vers le bas si le state isOpen est true*/}
          {isOpen ?
            <img src={`${basename}/Pictures/FlecheVersLeBas.png`} alt="Flèche vers le bas"></img> :
            <img src={`${basename}/Pictures/FlecheVersLeHaut.png`} alt="Flèche vers le haut"></img>}
        </button>
      </div>

      {/*Ternaire permettant d'afficher la partie dropdown__datas si le state isOpen est true*/}
      {
        isOpen ?
          <div className={`dropdown__datas dropdown__datas--${page}`}>

            {/*Ternaire permettant d'afficher text sous forme de liste si la prop recue est un array*/}
            {typeof text === 'string' ?
              <p> {text} </p> :
              <ul>
                {text.map((item, index) =>
                  <li key={`Dropdown-li-${index}`}> {item} </li>
                )}
              </ul>
            }
          </div> :
          <div></div>
      }
    </DropdownStyle >
  );
}

Dropdown.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Dropdown;
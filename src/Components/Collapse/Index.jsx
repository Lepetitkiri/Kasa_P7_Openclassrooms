import React, { useContext } from "react";
import CollapseStyle from "./Style.jsx";
import PropTypes from "prop-types";

{/*Components*/ }
import Dropdown from "../Dropdown/Index.jsx";

{/*Contextes des provider*/ }
import { MyContextFromAboutPageForCollapse } from '../../Pages/About/index';
import { MyContextFromHousingPageForCollapse } from "../../Pages/Housing";

function Collapse({ page }) {

  {/*Récupération des bonnes datas provenant des provider en fonction de la prop "page" */ }
  const contextData =
    page === "about" ? useContext(MyContextFromAboutPageForCollapse) : useContext(MyContextFromHousingPageForCollapse);

  return (

    <CollapseStyle className={`${contextData[0].className}`} >

      {/* Utilisation de map() pour créer des composants Dropdown à partir des datas du Provider */}
      {contextData.map((item, index) => (
        <Dropdown
          page={page}
          key={`Collapse-${index}`}
          title={item.title}
          text={item.text}
        />
      ))
      }

    </ CollapseStyle >
  );
}

Collapse.propTypes = {
  page: PropTypes.string // Validation de la prop page
};

export default Collapse;
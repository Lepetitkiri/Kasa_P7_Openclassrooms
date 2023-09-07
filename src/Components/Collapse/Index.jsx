import React, { useContext } from "react";
import { MyContext } from '../../Pages/About/index';
import CollapseStyle from "./Style.jsx";

import Dropdown from "../Dropdown/Index.jsx";

function Collapse() {

  {/*Récupération des données venant du Provider*/ }
  const myContext = useContext(MyContext);

  return (

    <CollapseStyle className={`${myContext[0].className}`} >

      {/* Utilisation de map() pour créer des composants Dropdown à partir des données provenant du Provider */}
      {myContext.map((aboutCollapse, index) => (
        <Dropdown
          key={`aboutCollapse-${index}`}
          title={`${aboutCollapse.title}`}
          text={`${aboutCollapse.text}`}
        />
      ))
      }
    </ CollapseStyle >
  );
}

export default Collapse;
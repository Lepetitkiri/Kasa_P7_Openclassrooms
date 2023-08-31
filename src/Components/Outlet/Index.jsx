import React, { useState } from "react";
import OutletStyle from "../Outlet/Style.jsx";

function Outlet() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  console.log(setIsOpen);
  console.log(useState);

  return (
    <OutletStyle>
      <div className="dropdown">
        <div className="dropdown__title">
          <h2>Outlet Title </h2>
          <button>
            <img src='./Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>
            <img src='./Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img>
          </button>
        </div>
        <div className="dropdown__datas"> Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu </div>
      </div>
      <div className="dropdown">
        <div className="dropdown__title">
          <h2>Outlet Title </h2>
          <button>
            <img src='./Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>
            <img src='./Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img>
          </button>
        </div>
        <div className="dropdown__datas"> Outlet contenu </div>
      </div>
      <div className="dropdown">
        <div className="dropdown__title">
          <h2>Outlet Title </h2>
          <button>
            <img src='./Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>
            <img src='./Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img>
          </button>
        </div>
        <div className="dropdown__datas"> Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu Outlet contenu</div>
      </div>
    </OutletStyle>
  );
}

export default Outlet;
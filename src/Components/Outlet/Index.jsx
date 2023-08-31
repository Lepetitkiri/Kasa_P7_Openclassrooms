import React, { useState } from "react";
import OutletStyle from "../Outlet/Style.jsx";

function Outlet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutletStyle>
      <div className="dropdown">
        <div className="dropdown__title">
          <h2>Title</h2>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <img src='./Pictures/FlecheVersLeBas.png' alt="Flèche vers le bas"></img> : <img src='./Pictures/FlecheVersLeHaut.png' alt="Flèche vers le haut"></img>}
          </button>
        </div>
        {isOpen ? <div className="dropdown__datas">Outlet contenu</div> : <div></div>}
      </div>
    </OutletStyle>
  );
}

export default Outlet;
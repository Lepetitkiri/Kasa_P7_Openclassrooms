import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../Logo/Index.jsx'
import HeaderStyle from "./Style.jsx";

function Header() {
  return (
    <HeaderStyle>
      <Logo className="header__logo" />
      <nav>
        <Link to="/"> Accueil </Link>
        <Link to="/About"> A propos </Link>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
import React from "react";
import { Link } from 'react-router-dom';
import HeaderStyle from './Style'
import Logo from '../Logo/Index.jsx'

function Header() {
    return (
        <HeaderStyle>
            <Logo />
            <nav>
                <Link to="/Home"> Accueil </Link>
                <Link to="/About"> A propos </Link>
            </nav>
        </HeaderStyle>
    );
}

export default Header;
import React from "react";
import Logo from '../Logo/Index.jsx'
import FooterStyle from "./Style.jsx";

function Footer() {
  return (
    <FooterStyle>
      <Logo className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyle>
  );
}

export default Footer;
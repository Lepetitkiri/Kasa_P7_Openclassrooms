import React, { useContext } from "react";
import BannerStyle from "./Style.jsx";
import PropTypes from "prop-types";

import { MyContextForBasenameValue } from '../../index.js';

function Banner({ className, bannerText }) {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <BannerStyle basename={basename} className={className}>
      <h1>{bannerText}</h1>
    </BannerStyle>
  );
}

Banner.propTypes = {
  className: PropTypes.string, // Validation de la prop className
  bannerText: PropTypes.string // Validation de la prop bannerText
};

export default Banner;
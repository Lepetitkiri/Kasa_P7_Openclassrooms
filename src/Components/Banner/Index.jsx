import React from "react";
import BannerStyle from "./Style.jsx";
import PropTypes from "prop-types";

function Banner({ className, bannerText }) {
  return (
    <BannerStyle className={className}>
      <h1>{bannerText}</h1>
    </BannerStyle>
  );
}

Banner.propTypes = {
  className: PropTypes.string, // Validation de la prop className
  bannerText: PropTypes.string // Validation de la prop bannerText
};

export default Banner;
import React from "react";
import BannerStyle from "./Style.jsx";
import PropTypes from "prop-types";

function Banner({ className }) {
  return (
    <BannerStyle className={className}>
      <div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </BannerStyle>
  );
}

Banner.propTypes = {
  className: PropTypes.string, // Validation de la prop className
  bannerSrc: PropTypes.string // Validation de la prop bannerSrc
};

export default Banner;
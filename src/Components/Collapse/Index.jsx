import React from "react";
import PropTypes from 'prop-types';
import CollapseStyle from "./Style.jsx";

function Collapse({ className, text, title }) {

  return (
    <CollapseStyle className={className} >
      <p> {text} </p>
      <p> {title} </p>
    </CollapseStyle>
  );
}

Collapse.propTypes = { className: PropTypes.string, text: PropTypes.string, title: PropTypes.string };

export default Collapse;
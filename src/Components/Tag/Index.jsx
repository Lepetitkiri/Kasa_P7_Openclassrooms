import React from "react";
import TagStyle from "./Style.jsx";
import PropTypes from "prop-types";

function Tag({ tags }) {

  return (
    <TagStyle>
      <p> {tags} </p>
    </TagStyle>
  );
}

Tag.propTypes = {
  tags: PropTypes.string,
};

export default Tag;
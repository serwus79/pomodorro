import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

function Link(props) {
  return <a>{props.children}</a>;
}

Link.propTypes = {};

export default Link;

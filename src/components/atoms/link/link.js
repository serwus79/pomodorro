import React from "react";
import "./link.scss";

function Link(props) {
  return <a>{props.children}</a>;
}

Link.propTypes = {};

export default Link;

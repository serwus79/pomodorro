import React, { Component } from "react";
import "./link.scss";

class Link extends Component {
  static propTypes = {};

  render() {
    return <a>{this.props.children}</a>;
  }
}

export default Link;

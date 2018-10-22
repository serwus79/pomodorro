import React, { Component } from "react";
import PropTypes from "prop-types";

export class ProgressBar extends Component {
  static propTypes = {
    progress: PropTypes.number.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <div className="card-timeline" />
        {this.props.progress}
      </React.Fragment>
    );
  }
}

export default ProgressBar;

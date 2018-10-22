import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressBar from "../../atoms/progress-bar";

export class TimerDisplay extends Component {
  static propTypes = {
    timeTotal: PropTypes.number.isRequired,
    timeRemaining: PropTypes.number.isRequired
  };
  pad = num => {
    return ("0" + num).slice(-2);
  };
  hhmmss = secs => {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    return (
      (hours ? this.pad(hours) + ":" : "") +
      this.pad(minutes) +
      ":" +
      this.pad(secs)
    );
  };
  render() {
    return (
      <div>
        <h1 className="card-time">
          {this.hhmmss(this.props.timeRemaining)}
          {/* <span className="time-decrease">-</span> */}
          {/* 14:45 */}
          {/* <span className="time-increase">+</span> */}
        </h1>
        <div className="card-timeline-part">
          <div className="clearfix">
            <div className="float-left">
              {this.hhmmss(this.props.timeTotal - this.props.timeRemaining)}
            </div>
            <div className="float-right">
              {this.hhmmss(this.props.timeTotal)}
            </div>
          </div>
          <ProgressBar
            progress={Math.ceil(
              ((this.props.timeTotal - this.props.timeRemaining) /
                this.props.timeTotal) *
                100
            )}
          />
        </div>
      </div>
    );
  }
}

export default TimerDisplay;

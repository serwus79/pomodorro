import React, { Component } from "react";
import moment from "moment";
import "./timer.scss";

import TimerDisplay from "../../molecules/timer-display";

class Timer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      startTime: undefined,
      action: "STOP",
      timeRemaining: 0,
      timeTotal: 25 * 60,
      interval: undefined
    };
  }

  countRemainingTime = () => {
    const tmpTimeRemaining = this.state.timeRemaining - 1;
    this.setState({ timeRemaining: tmpTimeRemaining }, () => {
      if (tmpTimeRemaining <= 0) {
        this.stopCountdown();
        alert("done");
      }
    });
  };

  startCountdown = () => {
    this.setState({
      startTime: moment(),
      timeRemaining: this.state.timeTotal
    });
    this.resumeCountdown();
  };

  stopCountdown = () => {
    clearInterval(this.state.interval);

    this.setState({
      startTime: undefined,
      action: "STOP",
      interval: undefined
    });
  };

  pauseCountdown = () => {
    clearInterval(this.state.interval);
    this.setState({
      action: "PAUSED",
      interval: undefined
    });
  };
  resumeCountdown = () => {
    const interval = setInterval(this.countRemainingTime, 1000);
    this.setState({
      action: "START",

      interval
    });
  };

  render() {
    return (
      <div className="col col-md-5 col-lg-5">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-title mb-0">
              <p className="my-0 font-weight-bold">
                GroupName{" "}
                <span className="my-0 font-weight-normal"> - TaskName</span>{" "}
              </p>
            </div>
            <div className="card-body p-0">
              <TimerDisplay
                timeTotal={this.state.timeTotal}
                timeRemaining={this.state.timeRemaining}
              />
              <div className="time-control">
                {this.state.action === "STOP" && (
                  <button type="button" onClick={this.startCountdown}>
                    Start
                  </button>
                )}
                {(this.state.action === "START" ||
                  this.state.action === "PAUSED") && (
                  <button type="button" onClick={this.stopCountdown}>
                    Stop
                  </button>
                )}
                {this.state.action === "START" && (
                  <button type="button" onClick={this.pauseCountdown}>
                    Pause
                  </button>
                )}
                {this.state.action === "PAUSED" && (
                  <button type="button" onClick={this.resumeCountdown}>
                    Resume
                  </button>
                )}
                <br />
                <span className="time-control-label">{this.state.action}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

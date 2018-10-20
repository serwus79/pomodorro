import React, { Component } from "react";
import moment from "moment";
import "./timer.scss";

class Timer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      startTime: undefined,
      action: "STOP",
      timeRemaining: 0,
      interval: undefined
    };
  }

  countRemainingTime = () => {
    const timeRemaining = moment.duration(moment().diff(this.startTime));

    this.setState({ timeRemaining: timeRemaining.asSeconds() });
  };

  startCountdown = () => {
    const interval = setInterval(this.countRemainingTime, 1000);

    this.setState({
      startTime: moment(),
      action: "ACTIVE",
      interval
    });
  };

  stopCountdown = () => {
    clearInterval(this.interval);

    this.setState({
      startTime: undefined,
      action: "STOP"
    });
  };

  pauseCountdown = () => {};

  render() {
    return (
      <div>
        <div className="timeRemaining">{this.state.timeRemaining}</div>
        <div className="card-deck mb-3 text-center">
          {this.state.action === "STOP" && (
            <button type="button" onClick={this.startCountdown}>
              Start
            </button>
          )}
          {this.state.action === "START" && (
            <button type="button" onClick={this.stopCountdown}>
              Stop
            </button>
          )}
          {this.state.action === "START" && (
            <button type="button" onClick={this.pauseCountdown}>
              Pause
            </button>
          )}
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">OSKY: TU MA BYĆ TIMER</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

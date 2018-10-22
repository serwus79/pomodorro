import React, { Component } from "react";
import "./timer.scss";

class Timer extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="col col-md-5 col-lg-5">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-title mb-0">
              <p className="my-0 font-weight-bold">GroupName <span className="my-0 font-weight-normal"> - TaskName</span> </p>
            </div>
            <div className="card-body p-0">
                <h1 className="card-time">
                  {/* <span className="time-decrease">-</span> */}
                  14:45
                  {/* <span className="time-increase">+</span> */}
                </h1>
              <div className="card-timeline-part">
                <div className="clearfix">
                  <div className="float-left">10:45</div>
                  <div className="float-right">25:00</div>
                </div>
              <div className="card-timeline">
              </div>
              </div> 
              <div className="time-control">
                >
                <br/>
                <span className="time-control-label">PAUSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

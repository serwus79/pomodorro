import React from "react";
import "./timer.scss";

function Timer(props) {
  return (
    <div>
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">OSKY: TU MA BYĆ TIMER</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $0 <small class="text-muted">/ mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              class="btn btn-lg btn-block btn-outline-primary"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Timer.propTypes = {};

export default Timer;

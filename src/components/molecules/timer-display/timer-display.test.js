import React from "react";
import ReactDOM from "react-dom";
import TimerDisplay from "./timer-display";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TimerDisplay timeTotal={10} timeRemaining={3} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

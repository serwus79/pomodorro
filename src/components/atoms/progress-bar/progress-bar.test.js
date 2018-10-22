import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./progress-bar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProgressBar progress={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import ReactDOM from "react-dom";
import Timer from "./timer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Timer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should show 0 timeRemaining at start", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Timer />, div);

  expect(div.querySelector("h1.card-time").textContent).toBe("00:00");

  ReactDOM.unmountComponentAtNode(div);
});

// TODO: More test needed

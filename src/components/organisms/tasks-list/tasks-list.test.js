import React from "react";
import ReactDOM from "react-dom";
import TasksList from "./tasks-list";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TasksList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// TODO: More test needed

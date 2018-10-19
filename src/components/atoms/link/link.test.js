import React from "react";
import ReactDOM from "react-dom";
import Link from "./link";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Link />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render proper simple html", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Link>tekst</Link>, div);
  expect(div.innerHTML).toBe("<a>tekst</a>");
  ReactDOM.unmountComponentAtNode(div);
});

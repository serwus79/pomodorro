import React, { Component } from "react";
import "./App.scss";
import HomePage from "./components/pages/home-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "../../templates/header";
import Timer from "../../organisms/timer";
import TasksList from "../../organisms/tasks-list";

import "./home-page.scss";

class HomePage extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <Timer />
          <TasksList />
        </div>
      </div>
    );
  }
}

export default HomePage;

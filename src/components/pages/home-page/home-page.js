import React from "react";
import "./home-page.scss";
import Header from "../../templates/header";
import Timer from "../../organisms/timer";

function HomePage(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <Timer />
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;

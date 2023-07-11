import React from "react";
import "./Navigation.css";
import Sidebar from "../sidebar/Sidebar";

const Navigation = () => {
  return (
    <header>
      <div id="nav-mobile">
        <div className="App" id="outer-container">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
          <div id="page-wrap">
            <h1>C</h1>
          </div>
        </div>
      </div>
      <div id="nav-desktop">
        <div id="logo"> logo</div>

        <ul id="navbar">
          <li>A propos</li>
          <li>Compétences</li>
          <li>Travaux</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;

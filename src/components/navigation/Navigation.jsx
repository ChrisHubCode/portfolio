import React from "react";
import "./Navigation.css";
import { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

const Navigation = () => {
  const [open, close] = useState(false);
  function switchMenu() {
    close((current) => !current);
  }

  return (
    <header>
      <div id="nav-mobile">
        <div> </div>
        <div onClick={switchMenu} id="container-icon-menu">
          <span className={open ? "icon-off" : "icon-on"}>&#9776;</span>
          <span className={open ? "icon-on" : "icon-off"}>&#9746;</span>
        </div>
      </div>
      <div className={open ? "collapse" : "collapse-close"}>
        <ul id="collapse-menu" onClick={switchMenu}>
          <li>
            <Link smooth to="/#about" className="nav-menu">
              À propos
            </Link>
          </li>
          <li>
            <Link smooth to="/#skills-section" className="nav-menu">
              Compétences
            </Link>
          </li>
          <li>
            <Link smooth to="/#works-section" className="nav-menu">
              Travaux
            </Link>
          </li>
          <li>
            <Link smooth to="/#contact" className="nav-menu">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div id="nav-desktop">
        <div id="logo"> </div>

        <ul id="navbar">
          <li>
            <Link smooth to="/#about" className="nav">
              A propos
            </Link>
          </li>
          <li>
            <Link smooth to="/#skills-section" className="nav">
              Compétences
            </Link>
          </li>
          <li>
            <Link smooth to="/#works-section" className="nav">
              Travaux
            </Link>
          </li>
          <li>
            <Link smooth to="/#contact" className="nav">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;

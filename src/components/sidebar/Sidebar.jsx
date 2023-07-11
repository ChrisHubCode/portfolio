import React from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";

const Sidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        A propos
      </a>
      <a className="menu-item" href="/">
        Compétences
      </a>
      <a className="menu-item" href="/pizzas">
        travaux
      </a>
      <a className="menu-item" href="/desserts">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;

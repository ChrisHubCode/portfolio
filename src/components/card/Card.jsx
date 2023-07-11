import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <NavLink className="card-container" to={`/travaux/${props.id}`}>
      <article className="card">
        <img src={props.image} alt={props.title} />
        <h3 className="card-title">{props.title}</h3>
      </article>
    </NavLink>
  );
};

export default Card;

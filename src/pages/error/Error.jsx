import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section id="error-section">
      <p className="error-text">ERREUR</p>
      <p>la page que vous demandez n'existe pas</p>
      <NavLink className="error-return" to="/">
        <img src="/src/assets/home.png" alt="icône de retour à l'accueil" />
        <p>Retourner vers l'accueil</p>
      </NavLink>
    </section>
  );
};

export default Error;

import React from "react";
import { useParams, Navigate } from "react-router-dom";
import works from "../../data/works.json";
import Caroussel from "../../components/caroussel/Caroussel";
import List from "../../components/list/List";
import "./Work.css";
import { NavLink } from "react-router-dom";

const Work = () => {
  const { id } = useParams();
  const found = works.find((work) => work.id === id);
  console.log(found);

  if (!found) {
    return <Navigate replace to="/Error" />;
  }
  return (
    <section className="work-section">
      <NavLink className="return-home" to="/">
        <img src="/src/assets/home.png" alt="icône de retour à l'accueil" />
        <p className="home-link">Retourner vers l'accueil</p>
      </NavLink>

      <div className="work-title-div">
        <h3 className="work-title">{found.title}</h3>
        <h4 className="work-sub">{found.subtitle}</h4>
      </div>
      <Caroussel photos={found.pictures} />
      <div className="work-details">
        <p>{found.description}</p>
        <a href={found.githublink}>Lien github du projet</a>
      </div>
      <List skills={found.projectSkill} />
    </section>
  );
};

export default Work;

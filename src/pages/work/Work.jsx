import React from "react";
import { useParams, Navigate } from "react-router-dom";
import works from "../../data/works.json";
import Caroussel from "../../components/caroussel/Caroussel";
import List from "../../components/list/List";

const Work = () => {
  const { id } = useParams();
  const found = works.find((work) => work.id === id);
  console.log(found);

  if (!found) {
    return <Navigate replace to="/Error" />;
  }
  return (
    <section className="work-section">
      <div>
        <h3>{found.title}</h3>
      </div>
      <Caroussel photos={found.pictures} />
      <div>
        <p>{found.description}</p>
        <a href={found.githublink}>Lien github du projet</a>
      </div>
    </section>
  );
};

export default Work;

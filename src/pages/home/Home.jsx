import React from "react";
import "./Home.css";
import Navigation from "../../components/navigation/Navigation";
import Card from "../../components/card/Card";
import works from "../../data/works.json";

const Home = () => {
  return (
    <main>
      <Navigation />
      <section id="expo">
        <p>Christopher Plur - Developpeur Frontend</p>
      </section>
      <section id="about">
        <h2>À PROPOS DE MOI</h2>
        <p>
          Actuellement en reconversion professionnelle, Je suis à la recherche
          d'une première expérience en tant que dévellopeur afin de consolider
          les bases acquises lors d'une formation effectuée avec l'organisme
          OpenClassrooms. Parallèlement, je continue mon apprentissage de façon
          autodidacte en travaillant sur des projets personnels.
        </p>
      </section>
      <section id="skills-section">
        <h2>COMPÉTENCES</h2>
        <div id="skills">
          <div className="skill">
            <h3>HTML</h3> <img src="/src/assets/html.png" alt="icone html" />
          </div>
          <div className="skill">
            <h3>CSS</h3> <img src="/src/assets/css.png" alt="icone css" />
          </div>
          <div className="skill">
            <h3>JAVASCRIPT</h3>
            <img src="/src/assets/javaicon.png" alt="icone javascript" />
          </div>
          <div className="skill">
            <h3>REACT JS</h3>
            <img src="/src/assets/reacticon.png" alt="icone ract js" />
          </div>
          <div className="skill">
            <h3>NODE JS</h3>
            <img src="/src/assets/nodeicon.png" alt="icone node js" />
          </div>
          <div className="skill">
            <h3>MONGO DB</h3>
            <img src="/src/assets/mongodbicon.png" alt="icone mongoDB" />
          </div>
        </div>
      </section>
      <section id="works-section">
        <h2>TRAVAUX</h2>
        <div id="works-container">
          {works.map((work) => (
            <Card
              key={work.id}
              image={work.cover}
              title={work.title}
              id={work.id}
            />
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>CONTACT</h2>
        <div id="contact-info">
          <img src="/src/assets/mailicon.png" alt="icône mail" />
          <span>christopher.plur.pro@gmail.com</span>
        </div>
      </section>
      <footer>
        <a href="https://github.com/ChrisHubCode">
          <img
            className="github"
            src="/src/assets/githubicon.png"
            alt="icône github"
          />
        </a>
        <p>Réalisé par Christopher Plur</p>
      </footer>
    </main>
  );
};

export default Home;

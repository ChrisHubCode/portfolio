import React from "react";
import "./Home.css";
import Navigation from "../../components/navigation/Navigation";
import Card from "../../components/card/Card";
import works from "../../data/works.json";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javaicon.png";
import reactIcon from "../../assets/reacticon.png";
import nodeIcon from "../../assets/nodeicon.png";
import mongodbIcon from "../../assets/mongodbicon.png";
import githubIcon from "../../assets/githubicon.png";
import mailIcon from "../../assets/mailicon.png";

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
            <h3>HTML</h3> <img src={htmlIcon} alt="icone html" />
          </div>
          <div className="skill">
            <h3>CSS</h3> <img src={cssIcon} alt="icone css" />
          </div>
          <div className="skill">
            <h3>JAVASCRIPT</h3>
            <img src={javascriptIcon} alt="icone javascript" />
          </div>
          <div className="skill">
            <h3>REACT JS</h3>
            <img src={reactIcon} alt="icone ract js" />
          </div>
          <div className="skill">
            <h3>NODE JS</h3>
            <img src={nodeIcon} alt="icone node js" />
          </div>
          <div className="skill">
            <h3>MONGO DB</h3>
            <img src={mongodbIcon} alt="icone mongoDB" />
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
          <img src={mailIcon} alt="icône mail" />
          <span>christopher.plur.pro@gmail.com</span>
        </div>
      </section>
      <footer>
        <a href="https://github.com/ChrisHubCode">
          <img className="github" src={githubIcon} alt="icône github" />
        </a>
        <p>Réalisé par Christopher Plur</p>
      </footer>
    </main>
  );
};

export default Home;

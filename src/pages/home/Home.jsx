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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          pariatur quidem consequuntur quibusdam dignissimos eos saepe quo nemo
          commodi nobis tempore ducimus mollitia! Inventore, neque atque.
          Nesciunt, ea. Commodi, quae.
        </p>
      </section>
      <section id="skills-section">
        <h2>Compétences</h2>
        <div id="skills">
          <div className="skill">
            <h3>HTML</h3> <img src="/src/assets/html.png" alt="icone html" />
          </div>
          <div className="skill">
            <h3>CSS</h3> <img src="/src/assets/css.png" alt="icone css" />
          </div>
        </div>
      </section>
      <section id="works-section">
        <h2>Travaux</h2>
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
        <span id="envelope">&#9993; </span>
        <span id="mail-contact"> christopher.plur.pro@gmail.com</span>
      </section>
      <footer>réalisé par Christopher Plur</footer>
    </main>
  );
};

export default Home;

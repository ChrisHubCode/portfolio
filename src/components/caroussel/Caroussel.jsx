import React from "react";
import { useState } from "react";
import previousArrow from "../../assets/navicon.png";
import nextArrow from "../../assets/navicon.png";
import "./Caroussel.css";

const Caroussel = (props) => {
  const [current, setCurrent] = useState(0);
  const imageList = props.photos;
  const length = imageList.length;

  const currentImage = imageList.map((image, index) => {
    return (
      <div
        key={index}
        className={current === index ? "caroussel-on" : "caroussel-off"}
      >
        {index === current && (
          <img src={image} className="caroussel-image" alt={props.title} />
        )}
      </div>
    );
  });

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className="caroussel-container">
      {currentImage}
      <span className="leftArrow" onClick={prevSlide}>
        &#8592;
      </span>
      <span className="rightArrow" onClick={nextSlide}>
        &#8594;
      </span>
      <p className="caroussel-index">
        {current + 1}/{length}
      </p>
    </div>
  );
};

export default Caroussel;

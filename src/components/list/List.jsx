import React from "react";
import "./List.css";

const List = (props) => {
  const skillList = props.skills;
  const skillAll = skillList.map((image, index) => {
    return (
      <div key={index} className="skill-tab">
        <img src={image} alt="icone technologie" />
      </div>
    );
  });

  return <div className="skill-all">{skillAll}</div>;
};

export default List;

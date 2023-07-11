import React from "react";

const List = (props) => {
  const skillList = props.skills;
  const skillOne = skillList.map((skillName, skillIcon, alt, index) => {
    return (
      <div key={index} className="skill-tab">
        <p>{skillName}</p>
        <img src={skillIcon} alt={alt} />
      </div>
    );
  });

  return <div className="skill-all">{skillOne}</div>;
};

export default List;

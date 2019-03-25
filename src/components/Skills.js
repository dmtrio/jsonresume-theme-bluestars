import React from "react";

const Skills = props => {

  return (
    <div className="work section">
      <h4 className="section__title">Skills</h4> 
      {props.skills.map((skillObj, index) => {
        return <div key={index}>
        <h3>{skillObj.name}</h3>
        {skillObj.keywords.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </div>
      })}
    </div>
  )
}

export default Skills;

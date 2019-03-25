import React from "react";
import Work from "./Work";

const Resume = props => {
  const { 
    basics, 
    work, 
    volunteer, 
    education, 
    awards, 
    publications, 
    skills, 
    languages, 
    interests, 
    references
  } = props.resume;

  const skillElements = []
  for (const [index, skillObj] of skills.entries()) {
    skillElements.push(
    <div key={index}>
      <h3>{skillObj.name}</h3>
      {skillObj.keywords.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </div>
    )
  }

  return (
    <div className="resume-layout">
      <div className="resume-layout__header">
        {basics.name} {basics.label}
      </div>
      <div className="resume-layout__column resume-layout__column--primary">
        <Work work={work} />
      </div>
      <div className="resume-layout__column resume-layout__column--secondary">
        {skillElements}
      </div>
    </div>
  );
};

export default Resume;
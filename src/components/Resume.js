import React from "react";
import Work from "./Work";
import Skills from "./Skills";
import Education from "./Education";
import '../pack.scss';

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

  return (
    <div className="resume-layout">
      <div className="resume-layout__header">
        {basics.name} {basics.label}
      </div>
      <div className="resume-layout__column resume-layout__column--primary">
        <Work work={work} />
      </div>
      <div className="resume-layout__column resume-layout__column--secondary">
        <Skills skills={skills} />
        <Education education={education} />
      </div>
    </div>
  );
};

export default Resume;
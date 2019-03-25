import React from "react";



const Education = (props) => {

  const educationSubtitle = (educationObj) => {
    if (educationObj.studyType && educationObj.area) {
      return <h4>{educationObj.studyType} of {educationObj.area}</h4>;
    } else if (educationObj.area) {
      return <h4>{educationObj.area}</h4>;
    }
  }

  return (
    <div className="work section">
      <h4 className="section__title">Education</h4> 
      {props.education.map((educationObj, index) => {
        return <div key={index}>
        <h3>{educationObj.institution} - {educationObj.endDate}</h3>
        {educationSubtitle(educationObj)}
      </div>
      })}
    </div>
  )
}

export default Education;

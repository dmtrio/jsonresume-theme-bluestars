import React from "react";
import utils from '../utils/lib';


const Education = (props) => {
  const getEducationSubtitle = (educationObj) => {
    if (educationObj.studyType && educationObj.area) {
      return <h4>{educationObj.studyType} of {educationObj.area}</h4>;
    } else if (educationObj.area) {
      return <h4>{educationObj.area}</h4>;
    }
  }
  const getEducationDates = (endDate) => {
    const endDateObj = utils.formatDate(endDate)
    return endDateObj.year;
  }
  return (
    <div className="work section">
      <h4 className="section__title">Education</h4> 
      {props.education.map((educationObj, index) => {
        const educationSubtitle = getEducationSubtitle(educationObj)
        const educationDates = getEducationDates(educationObj.endDate)
        return <div key={index}>
        <h3>{educationObj.institution} - {educationDates}</h3>
        {educationSubtitle}
      </div>
      })}
    </div>
  )
}

export default Education;

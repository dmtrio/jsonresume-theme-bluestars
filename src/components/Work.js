import React from "react";
import utils from '../utils/lib'

const Work = props => {
  const getWorkDates = (workObj) => {
    const startDateObj = utils.formatDate(workObj.startDate)
    const endDateObj = utils.formatDate(workObj.endDate)
    return startDateObj.monthName + ' ' + startDateObj.year + '' 
  }
  return (
    <div className="work section">
      <h4 className="section__title">Experience</h4> 
      {props.work.map((workObj, index) => {
        const workDates = getWorkDates(workObj);
        return <div key={index}>
          <span className="work__title">
            <h2>{workObj.company}</h2> 
            <h2>{workObj.position}</h2>
            <h2>{workDates}</h2>
          </span>
          <div className="work__highlights">
            <h4>{workObj.summary}</h4>
            {workObj.highlights.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </div>
        </div>
      })}
    </div>
  )
}

export default Work;
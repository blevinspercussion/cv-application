import React, { Component } from "react";
import "./component_styles.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    function school(schoolName, fieldOfStudy, dateOfGraduation) {
      return(schoolName, fieldOfStudy, dateOfGraduation);
    }

    this.state = { 
      schools: [],
     };
  }
  render() {
    return (
      <div className="component education-info">
        <h2>Education</h2>
        <form>
          <label>School Name: </label>
          <input type="text"></input>
          <label>Field of Study: </label>
          <input type="text"></input>
          <label>Date of Graduation: </label>
          <input type="date"></input>
          <input className="btn-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EducationInfo;

import React, { Component } from "react";
import "./component_styles.css";

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);

    function workExperience(companyName, positionTitle, tasks, startDate, endDate) {
      return (companyName, positionTitle, tasks, startDate, endDate);
    };

    this.state = {
      workExperience: [],
    };
  }
  render() {
    return (
      <div className="component experience-info">
        <h2>Experience</h2>
        <form>
          <label>Company Name: </label>
          <input type="text"></input>
          <label>Position/Title: </label>
          <input type="text"></input>
          <label>Tasks: </label>
          <textarea rows="5"></textarea>
          <label>Start Date: </label>
          <input type="date"></input>
          <label>End date: </label>
          <input type="date"></input>
          <input className="btn-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ExperienceInfo;

import React, { Component } from "react";
import "./component_styles.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
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
        </form>
      </div>
    );
  }
}

export default EducationInfo;

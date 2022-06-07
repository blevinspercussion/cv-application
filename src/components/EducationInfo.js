import React, { Component } from "react";
import App from "../App";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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

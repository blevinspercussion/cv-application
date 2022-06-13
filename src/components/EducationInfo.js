import React, { Component } from "react";
import uniqid from "uniqid";
import "./component_styles.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  // saveInput = (e) => {
  //   this.setState({ input: e.target.value });
  // };

  render() {
    return (
      <div className="component education-info">
        <h2>Education</h2>
        <form onSubmit={this.props.handleSubmit}>
          <label>School Name: </label>
          <input
            type="text"
            name="schoolName"
            required={true}
            onChange={this.props.handleSchoolName}
          ></input>
          <label>Field of Study: </label>
          <input
            type="text"
            name="fieldOfStudy"
            required={true}
            onChange={this.props.handleFieldOfStudy}
          ></input>
          <label>Date of Graduation: </label>
          <input
            type="date"
            name="dateOfGraduation"
            required={true}
            onChange={this.props.handleDateOfGraduation}
          ></input>
          <input className="btn-submit" type="submit" value="Add School" />
        </form>
        <ul>
          {this.props.schools?.map((index) => (
            <li key={index}>
              {index.schoolName} - {index.fieldOfStudy} -{" "}
              {index.dateOfGraduation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EducationInfo;

import React, { Component } from "react";
// import uniqid from "uniqid";
import "./component_styles.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.handleSchoolNameChange.bind(this);
    this.handleFieldOfStudyChange.bind(this);
    this.handleDateOfGraduationChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleSchoolNameChange = (e) => {
    this.props.handleSchoolName(e.target.value);
  };
  handleFieldOfStudyChange = (e) => {
    this.props.handleFieldOfStudy(e.target.value);
  };
  handleDateOfGraduationChange = (e) => {
    this.props.handleDateOfGraduation(e.target.value);
  };

  handleSubmit = (e) => {
    this.props.handleSchoolSubmit();
    document.getElementById("ed-form").reset();
    e.preventDefault();
  };

  // saveInput = (e) => {
  //   this.setState({ input: e.target.value });
  // };

  render() {
    return (
      <div className="component education-info">
        <h2>Education</h2>
        <form id="ed-form" onSubmit={this.handleSubmit}>
          <label>School Name: </label>
          <input
            type="text"
            name="schoolName"
            required={true}
            onChange={this.handleSchoolNameChange}
          ></input>
          <label>Field of Study: </label>
          <input
            type="text"
            name="fieldOfStudy"
            required={true}
            onChange={this.handleFieldOfStudyChange}
          ></input>
          <label>Date of Graduation: </label>
          <input
            type="date"
            name="dateOfGraduation"
            required={true}
            onChange={this.handleDateOfGraduationChange}
          ></input>
          <input className="btn-submit" type="submit" value="Add School" />
        </form>
        <ul>
          {this.props.schools?.map((index) => (
            <li key={index.id} value={index.schoolName}>
              {index.schoolName} - {index.fieldOfStudy} -{" "}
              {index.dateOfGraduation}
              <div>
                <p onClick={() => this.props.deleteSchool(index.schoolName)}>
                  (delete)
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EducationInfo;

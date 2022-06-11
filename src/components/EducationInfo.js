import React, { Component } from "react";
import uniqid from "uniqid";
import "./component_styles.css";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: {
        schoolName: "",
        fieldOfStudy: "",
        dateOfGraduation: "",
        id: uniqid(),
      },

      schools: [],
    };

    this.handleSchoolName.bind(this);
    this.handleFieldOfStudy.bind(this);
    this.handleDateOfGraduation.bind(this);

    // this.saveInput.bind(this);
    this.handleSubmit.bind(this);
  }

  handleSchoolName = (e) => {
    this.setState({
      school: {
        schoolName: e.target.value,
        fieldOfStudy: this.state.school.fieldOfStudy,
        dateOfGraduation: this.state.school.dateOfGraduation,
        id: this.state.school.id,
      },
    });
  };

  handleFieldOfStudy = (e) => {
    this.setState({
      school: {
        schoolName: this.state.school.schoolName,
        fieldOfStudy: e.target.value,
        dateOfGraduation: this.state.school.dateOfGraduation,
        id: this.state.school.id,
      },
    });
  };

  handleDateOfGraduation = (e) => {
    this.setState({
      school: {
        schoolName: this.state.school.schoolName,
        fieldOfStudy: this.state.school.fieldOfStudy,
        dateOfGraduation: e.target.value,
        id: this.state.school.id,
      },
    });
  };

  // saveInput = (e) => {
  //   this.setState({ input: e.target.value });
  // };

  handleSubmit = (e) => {
    // let { school, schools } = this.state;
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        schoolName: "",
        fieldOfStudy: "",
        dateOfGraduation: "",
        id: uniqid(),
      },
    });
    this.handleSchoolName(e);
    this.handleFieldOfStudy(e);
    this.handleDateOfGraduation(e);
    e.preventDefault();
  };

  render() {
    return (
      <div className="component education-info">
        <h2>Education</h2>
        <form onSubmit={this.handleSubmit}>
          <label>School Name: </label>
          <input
            type="text"
            name="schoolName"
            required={true}
            onChange={this.handleSchoolName}
          ></input>
          <label>Field of Study: </label>
          <input
            type="text"
            name="fieldOfStudy"
            required={true}
            onChange={this.handleFieldOfStudy}
          ></input>
          <label>Date of Graduation: </label>
          <input
            type="date"
            name="dateOfGraduation"
            required={true}
            onChange={this.handleDateOfGraduation}
          ></input>
          <input className="btn-submit" type="submit" value="Add School" />
        </form>
        <ul>
          {this.state.schools.map((index) => (
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

import React, { Component } from "react";
import uniqid from "uniqid";
import "./resume_style.css";

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="resume-general">
          <h1>{this.props.fullName}</h1>
          <ul>
            <li>
              <h3>{this.props.email}</h3>
            </li>
            <li>
              <h3>{this.props.phone}</h3>
            </li>
          </ul>
        </div>
        <hr />
        <div className="resume-education">
          <h1>Education</h1>
          <ul>
            {this.props.schools?.map((index) => (
              <li key={uniqid}>
                <h2>{index.schoolName}</h2>
                <p>Field of Study: {index.fieldOfStudy}</p>
                <p>Date of Graduation: {index.dateOfGraduation}</p>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="resume-experience">
          <h1>Work Experience</h1>
          <ul>
            {this.props.works?.map((index) => (
              <li key={uniqid}>
                <h2>{index.workName}</h2>
                <p>Position: {index.position}</p>
                <p>Tasks: {index.tasks}</p>
                <p>
                  From {index.startDate} until {index.endDate}
                </p>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Resume;

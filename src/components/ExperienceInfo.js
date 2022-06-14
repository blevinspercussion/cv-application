import React, { Component } from "react";
import "./component_styles.css";

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.handleCompanyNameChange.bind(this);
    this.handlePositionChange.bind(this);
    this.handleTasksChange.bind(this);
    this.handleStartDateChange.bind(this);
    this.handleEndDateChange.bind(this);

    this.handleSubmit.bind(this);
  }

  handleCompanyNameChange = (e) => {
    this.props.handleCompanyName(e.target.value);
  };
  handlePositionChange = (e) => {
    this.props.handlePosition(e.target.value);
  };
  handleTasksChange = (e) => {
    this.props.handleTasks(e.target.value);
  };
  handleStartDateChange = (e) => {
    this.props.handleStartDate(e.target.value);
  };
  handleEndDateChange = (e) => {
    this.props.handleEndDate(e.target.value);
  };

  handleSubmit = (e) => {
    this.props.handleWorkSubmit();
    e.preventDefault();
  };

  render() {
    return (
      <div className="component experience-info">
        <h2>Experience</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Company Name: </label>
          <input
            type="text"
            required={true}
            onChange={this.handleCompanyNameChange}
          ></input>
          <label>Position/Title: </label>
          <input
            type="text"
            required={true}
            onChange={this.handlePositionChange}
          ></input>
          <label>Tasks: </label>
          <textarea
            rows="5"
            required={true}
            onChange={this.handleTasksChange}
          ></textarea>
          <label>Start Date: </label>
          <input
            type="date"
            required={true}
            onChange={this.handleStartDateChange}
          ></input>
          <label>End date: </label>
          <input
            type="date"
            required={true}
            onChange={this.handleEndDateChange}
          ></input>
          <input className="btn-submit" type="submit" value="Add Work" />
        </form>
        <ul>
          {this.props.works?.map((index) => (
            <li key={index}>
              {index.workName}
              <br />
              Position: {index.position}
              <br />
              Tasks: {index.tasks}
              <br />
              Start Date: {index.startDate}
              <br />
              End Date: {index.endDate}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExperienceInfo;

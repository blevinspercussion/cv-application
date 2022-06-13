import React, { Component } from "react";
import "./component_styles.css";

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component experience-info">
        <h2>Experience</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Company Name: </label>
          <input
            type="text"
            required={true}
            onChange={this.handleCompanyName}
          ></input>
          <label>Position/Title: </label>
          <input
            type="text"
            required={true}
            onChange={this.handlePosition}
          ></input>
          <label>Tasks: </label>
          <textarea
            rows="5"
            required={true}
            onChange={this.handleTasks}
          ></textarea>
          <label>Start Date: </label>
          <input
            type="date"
            required={true}
            onChange={this.handleStartDate}
          ></input>
          <label>End date: </label>
          <input
            type="date"
            required={true}
            onChange={this.handleEndDate}
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
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExperienceInfo;

import React, { Component } from "react";
import "./component_styles.css";

class ExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        workName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
      works: [],
    };

    this.handleCompanyName.bind(this);
    this.handlePosition.bind(this);
    this.handleTasks.bind(this);
    this.handleStartDate.bind(this);
    this.handleEndDate.bind(this);
    this.handleSubmit.bind(this);
  }

  handleCompanyName = (e) => {
    this.setState({
      work: {
        workName: e.target.value,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handlePosition = (e) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: e.target.value,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleTasks = (e) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: e.target.value,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleStartDate = (e) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: e.target.value,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleEndDate = (e) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    this.setState({
      works: this.state.works.concat(this.state.work),
      work: {
        workName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
    });
    this.handleCompanyName(e);
    this.handlePosition(e);
    this.handleTasks(e);
    this.handleStartDate(e);
    this.handleEndDate(e);
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
          <input className="btn-submit" type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.works.map((index) => (
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

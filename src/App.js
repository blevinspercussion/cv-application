import React, { Component } from "react";
import uniqid from "uniqid";
import "./App.css";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",

      school: {
        schoolName: "",
        fieldOfStudy: "",
        dateOfGraduation: "",
        id: uniqid(),
      },
      schools: [],

      work: {
        workName: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: "",
      },
      works: [],
    };

    this.handleName.bind(this);
    this.handleEmail.bind(this);
    this.handlePhone.bind(this);

    this.handleSchoolName.bind(this);
    this.handleFieldOfStudy.bind(this);
    this.handleDateOfGraduation.bind(this);
    this.handleSchoolSubmit.bind(this);

    this.handleCompanyName.bind(this);
    this.handlePosition.bind(this);
    this.handleTasks.bind(this);
    this.handleStartDate.bind(this);
    this.handleEndDate.bind(this);
    this.handleWorkSubmit.bind(this);
  }

  // Handlers for general info
  handleName = (name) => {
    this.setState({ fullName: name });
    console.log(this.state.fullName);
  };
  handleEmail = (newEmail) => {
    this.setState({ email: newEmail });
  };
  handlePhone = (newPhone) => {
    this.setState({ phone: newPhone });
  };

  // Handlers for school info
  handleSchoolName = (newSchoolName) => {
    this.setState({
      school: {
        schoolName: newSchoolName,
        fieldOfStudy: this.state.school.fieldOfStudy,
        dateOfGraduation: this.state.school.dateOfGraduation,
        id: this.state.school.id,
      },
    });
  };

  handleFieldOfStudy = (newFieldOfStudy) => {
    this.setState({
      school: {
        schoolName: this.state.school.schoolName,
        fieldOfStudy: newFieldOfStudy,
        dateOfGraduation: this.state.school.dateOfGraduation,
        id: this.state.school.id,
      },
    });
  };

  handleDateOfGraduation = (newDateOfGraduation) => {
    this.setState({
      school: {
        schoolName: this.state.school.schoolName,
        fieldOfStudy: this.state.school.fieldOfStudy,
        dateOfGraduation: newDateOfGraduation,
        id: this.state.school.id,
      },
    });
  };

  handleSchoolSubmit = (e) => {
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
  };

  // Handlers for work info
  handleCompanyName = (newCompanyName) => {
    this.setState({
      work: {
        workName: newCompanyName,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handlePosition = (newPosition) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: newPosition,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleTasks = (newTasks) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: newTasks,
        startDate: this.state.work.startDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleStartDate = (newStartDate) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: newStartDate,
        endDate: this.state.work.endDate,
      },
    });
  };

  handleEndDate = (newEndDate) => {
    this.setState({
      work: {
        workName: this.state.work.workName,
        position: this.state.work.position,
        tasks: this.state.work.tasks,
        startDate: this.state.work.startDate,
        endDate: newEndDate,
      },
    });
  };

  handleWorkSubmit = (e) => {
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
  };

  render() {
    return (
      <div className="main-div">
        {/* <h1>CV Maker</h1> */}
        <div className="cv-input">
          <GeneralInfo
            fullName={this.state.fullName}
            email={this.state.email}
            phone={this.state.phone}
            handleName={this.handleName}
            handleEmail={this.handleEmail}
            handlePhone={this.handlePhone}
          />
          <EducationInfo
            school={this.state.school}
            schools={this.state.schools}
            handleSchoolName={this.handleSchoolName}
            handleFieldOfStudy={this.handleFieldOfStudy}
            handleDateOfGraduation={this.handleDateOfGraduation}
            handleSchoolSubmit={this.handleSchoolSubmit}
          />
          <ExperienceInfo
            work={this.state.work}
            works={this.state.works}
            handleCompanyName={this.handleCompanyName}
            handlePosition={this.handlePosition}
            handleTasks={this.handleTasks}
            handleStartDate={this.handleStartDate}
            handleEndDate={this.handleEndDate}
            handleWorkSubmit={this.handleWorkSubmit}
          />
        </div>
        <div className="cv-output"></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
      },
      schools: [
        {
          schoolName: "",
          fieldOfStudy: "",
          dateOfGraduation: "",
        },
      ],
      experience: [
        {
          companyName: "",
          positionTitle: "",
          tasks: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>CV Maker App</h1>
        <GeneralInfo />
        <EducationInfo />
        <ExperienceInfo />
      </div>
    );
  }
}

export default App;

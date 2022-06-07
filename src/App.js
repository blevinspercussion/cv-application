import React, { Component } from "react";
import "./App.css";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

  
  }

  render() {
    return (
      <div className="main-div">
        {/* <h1>CV Maker</h1> */}
        <div className="cv-input">
          <GeneralInfo />
          <EducationInfo />
          <ExperienceInfo />
        </div>
        <div className="cv-output"></div>
      </div>
    );
  }
}

export default App;

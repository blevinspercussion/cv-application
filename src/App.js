import React, { Component } from "react";
import "./App.css";
import EducationInfo from "./components/EducationInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    // this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
    // this.updateEducationInfo = this.updateEducationInfo.bind(this);
    // this.updateExperienceInfo = this.updateExperienceInfo.bind(this);
    // this.setStateOfParent.bind(this);
    // this.handleChange = this.handleChange.bind(this);

    //   this.state = {
    //     GeneralInfo: {
    //       name: "",
    //       email: "",
    //       phone: "",
    //     },
    //     EducationInfo: {
    //       schools: [],
    //     },
    //     ExperienceInfo: {
    //       workExperience: [],
    //     },
    //   };
    // }

    // handleChange(event) {
    //   this.setState({ input: event.target.value });
    // }

    // setStateOfParent = (newInfo) => {
    //   this.setState({ name: newInfo });
  }

  render() {
    return (
      <div className="main-div">
        {/* <h1>CV Maker</h1> */}
        <div className="cv-input">
          <GeneralInfo
          // generalInfo={this.state.GeneralInfo}
          // updateGeneralInfo={this.updateGeneralInfo}
          // setStateOfParent={this.setStateOfParent}
          />
          <EducationInfo />
          <ExperienceInfo />
        </div>
        <div className="cv-output"></div>
      </div>
    );
  }
}

export default App;

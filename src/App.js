import React, { Component } from "react";
import "./App.css";

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
      </div>
    );
  }
}

export default App;

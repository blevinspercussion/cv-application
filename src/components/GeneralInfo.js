import React, { Component } from "react";
import App from "../App";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Contact Information</h2>
        <form>
          <label>Name: </label>
          <input type="text"></input>
          <label>Email: </label>
          <input type="email"></input>
          <label>Phone: </label>
          <input type="tel"></input>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;

import React, { Component } from "react";
import "./component_styles.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.saveInput = this.saveInput.bind(this);
    this.updateUI = this.updateUI.bind(this);
  }

  saveInput(event) {
    this.setState({ input: event.target.value });
  }

  updateUI(event) {
    let { generalInfo, input } = this.state;

    event.preventDefault();
  }

  render() {
    return (
      <div className="component general-info">
        <h2>Contact Information</h2>
        <form>
          <label>Name: </label>
          <input type="text"></input>
          <label>Email: </label>
          <input type="email"></input>
          <label>Phone: </label>
          <input type="tel"></input>
          <input className="btn-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;

import React, { Component } from "react";
import "./component_styles.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
    };

    this.handleName.bind(this);
    this.handleEmail.bind(this);
    this.handlePhone.bind(this);
  }

  handleName = (e) => {
    this.setState({ fullName: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  render() {
    return (
      <div className="component general-info">
        <h2>Contact Information</h2>
        <form>
          <label>Name: </label>
          <input type="text" onChange={this.handleName}></input>
          <label>Email: </label>
          <input type="email" onChange={this.handleEmail}></input>
          <label>Phone: </label>
          <input type="tel" onChange={this.handlePhone}></input>
          <input className="btn-submit" type="submit" value="Submit" />
        </form>

        <h2>{this.state.fullName}</h2>
        <h4>{this.state.email}</h4>
        <h4>{this.state.phone}</h4>
      </div>
    );
  }
}

export default GeneralInfo;

import React, { Component } from "react";
import "./component_styles.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange.bind(this);
  }

  handleNameChange = (e) => {
    this.props.handleName(e.target.value);
  };

  render() {
    return (
      <div className="component general-info">
        <h2>Contact Information</h2>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleNameChange}
          ></input>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={this.props.handleEmail}
          ></input>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            onChange={this.props.handlePhone}
          ></input>
          {/* <input className="btn-submit" type="submit" value="Submit" /> */}
        </form>

        <h2>{this.props.fullName}</h2>
        <h4>{this.props.email}</h4>
        <h4>{this.props.phone}</h4>
      </div>
    );
  }
}

export default GeneralInfo;

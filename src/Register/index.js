import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  handleUsernameInput = event => {
    this.setState({ username: event.target.value });
  };
  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };
  handlePassInput = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" onChange={this.handleUsernameInput} />
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={this.handleEmailInput} />
        <label htmlFor="pass">Password:</label>
        <input type="password" onChange={this.handlePassInput} />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

export default Register;

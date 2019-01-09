import React, { Component } from "react"

class Register extends Component {
  constructor() {
    super()

    this.state = {
      email: ""
    }
  }

  handleEmailInput = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <form>
        <h3>Register</h3>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={this.handleEmailInput} />
        <input type="submit" value="Register" />
      </form>
    )
  }
}

export default Register

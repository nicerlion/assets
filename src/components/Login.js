import React, { Component } from 'react'
import LoginForm from './login/LoginForm'

class Login extends Component {
    handleSubmit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <LoginForm onSubmit={this.handleSubmit} />
  }
}

export default Login;
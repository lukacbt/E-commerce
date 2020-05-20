import React, { Component } from "react"
import "./signin.scss"

import FormInput from "../FormInput/FormInput"
import CustomButton from "../CustomButton/CustomButton"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ email: "", password: "" })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" onChange={this.handleChange} label="email" type="email" value={this.state.email} required />
          <FormInput name="password" onChange={this.handleChange} label="password" type="password" value={this.state.password} required />

          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
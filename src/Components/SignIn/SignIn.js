import React, { Component } from "react"
import "./signin.scss"

import FormInput from "../FormInput/FormInput"
import CustomButton from "../CustomButton/CustomButton"
import { auth, signInWithGoogle } from "../../Firebase/FirebaseUtils"

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

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    
    }catch(err) {
      console.log(err)
    }

  }

  render() {
    return(
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" onChange={this.handleChange} label="email" type="email" value={this.state.email} required />
          <FormInput name="password" onChange={this.handleChange} label="password" type="password" value={this.state.password} required />

          <div className="buttons"> 
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton isGoogleButton={true} onClick={signInWithGoogle}> Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
import React from "react"
import "./signinpage.scss"
import SignIn from "../../Components/SignIn/SignIn"
import SignUp from "../../Components/SignUp/SignUp"

const SignInPage = () => {
  return(
    <div className="sign-in-page">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInPage
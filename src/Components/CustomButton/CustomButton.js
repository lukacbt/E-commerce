import React from "react"
import "./custombutton.scss"

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => {
  return(
    <button className={`${isGoogleButton ? "google-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
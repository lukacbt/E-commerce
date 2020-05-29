import React from "react"
import "./custombutton.scss"

const CustomButton = ({ children, isGoogleButton, inverted, ...otherProps }) => {
  return(
    <button className={`${isGoogleButton ? "google-sign-in" : ""} ${inverted ? "inverted" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
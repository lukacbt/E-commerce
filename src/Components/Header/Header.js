import React from "react"
import "./header.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../Firebase/FirebaseUtils"
import { connect } from "react-redux"
import CartIcon from "../CartIcon/CartIcon"
import CartDropdown from "../CartDropdown/CartDropdown"

const Header = ({ currentUser, showCartDropdown }) => {
  return(
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop"> 
          SHOP
        </Link>
        <Link className="option" to="/contact"> 
          CONTACT
        </Link>
        {
          currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
      </div>
      { showCartDropdown ? <CartDropdown/> : null }
    </div>
  )
}

const mapStateToProps = globalState => ({
    currentUser: globalState.user.currentUser,
    showCartDropdown: globalState.cart.showCart
})

export default connect(mapStateToProps, null)(Header)
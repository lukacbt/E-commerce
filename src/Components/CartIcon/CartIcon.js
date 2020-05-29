import React from "react"
import "./carticon.scss"
import { connect } from "react-redux"
import { toggleCartDropdown } from "../../Redux/cart/cartActions"

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"

const CartIcon = ({ toggleCartDropdown }) => (
	<div className="cart-icon">
		<ShoppingIcon onClick={toggleCartDropdown} className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
)

const mapDispatchToProps = {
  toggleCartDropdown
}

export default connect(null, mapDispatchToProps)(CartIcon)
import React from "react"
import "./carticon.scss"
import { connect } from "react-redux"
import { toggleCartDropdown } from "../../Redux/cart/cartActions"
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg"
import { selectCartItemsCount } from "../../Redux/cart/cartSelectors"

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
	<div className="cart-icon">
		<ShoppingIcon onClick={toggleCartDropdown} className="shopping-icon" />
		<span className="item-count"> {itemCount} </span>
	</div>
)

const mapStateToProps = globalState => ({
	itemCount: selectCartItemsCount(globalState)
  }) 
  

const mapDispatchToProps = {
  toggleCartDropdown
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
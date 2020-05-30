import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem"
import "./cartdropdown.scss"
import { connect } from "react-redux"

const CartDropdown = ({cartItems}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{ cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) }
		</div>
		<CustomButton>Go To Checkout</CustomButton>
	</div>
)

const mapStateToProps = globalState => ({
	cartItems: globalState.cart.cartItems
})

export default connect(mapStateToProps, null)(CartDropdown)
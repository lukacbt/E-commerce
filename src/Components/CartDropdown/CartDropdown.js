import React from "react"

import CustomButton from "../CustomButton/CustomButton"

import "./cartdropdown.scss"

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
		</div>
		<CustomButton>Go To Checkout</CustomButton>
	</div>
)

export default CartDropdown
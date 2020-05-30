import React from "react"
import CustomButton from "../CustomButton/CustomButton"
import CartItem from "../CartItem/CartItem"
import "./cartdropdown.scss"
import { connect } from "react-redux"
import { selectCartItems } from "../../Redux/cart/cartSelectors"
import { withRouter } from "react-router-dom"
import { toggleCartDropdown } from "../../Redux/cart/cartActions"

const CartDropdown = ({cartItems, history, toggleCartDropdown}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{ 
				cartItems.length 
				? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)) 
				: <span className="empty-message">Back To Shopping</span>
			}
		</div>
			<CustomButton onClick={() => { 
				history.push("/checkout");
				toggleCartDropdown()
			}}>Go To Checkout</CustomButton>
	</div>
)

const mapStateToProps = globalState => ({
	cartItems: selectCartItems(globalState)
})

const mapDispatchToProps = {
	toggleCartDropdown
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
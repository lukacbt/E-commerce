import React from "react"
import "./checkoutitem.scss"
import { connect } from "react-redux"
import { removeFromCart, addToCart, decreaseQuantity } from "../../Redux/cart/cartActions"

const Checkoutitem = ({ cartItem, removeFromCart, decreaseQuantity, addToCart }) => {
	const { name, quantity, price, imageUrl } = cartItem
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name"> {name} </span>
			<span className="quantity"> 
				{
					quantity === 1 
					? <div className="arrow" style={{width: "10.25px"}}></div>
					: <div onClick={() => decreaseQuantity(cartItem)} className="arrow">&#10094;</div>
				}
				<span className="value">{quantity}</span>  
				<div onClick={() => addToCart(cartItem)} className="arrow">&#10095;</div>
			</span>
			<span className="price"> {price} </span>
			<div onClick={() => removeFromCart(cartItem)} className="remove-button">&#10005;</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	removeFromCart: item => dispatch(removeFromCart(item)),
	decreaseQuantity: item => dispatch(decreaseQuantity(item)),
	addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(Checkoutitem)
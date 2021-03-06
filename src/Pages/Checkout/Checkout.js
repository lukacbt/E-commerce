import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from "../../Redux/cart/cartSelectors"
import "./checkout.scss"
import Checkoutitem from "../../Components/CheckoutItem/CheckoutItem"

const Checkout = ({ cartTotal, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(cartItem => <Checkoutitem key={cartItem.id} cartItem={cartItem} />)
    }
    <div className="total">
      <span> TOTAL: ${cartTotal} </span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps, null)(Checkout)
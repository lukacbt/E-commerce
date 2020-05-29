import React from "react"
import "./collectionitem.scss"

import CustomButton from "../CustomButton/CustomButton"
import { addToCart } from "../../Redux/cart/cartActions"
import { connect } from "react-redux"

const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => {
  return(
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>

      </div>
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> ${price} </span>
      </div>
      <CustomButton onClick={() => {addToCart()}} >Add To Cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
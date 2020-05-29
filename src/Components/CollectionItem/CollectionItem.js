import React from "react"
import "./collectionitem.scss"

import CustomButton from "../CustomButton/CustomButton"
import { addToCart } from "../../Redux/cart/cartActions"
import { connect } from "react-redux"

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item
  return(
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>

      </div>
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> ${price} </span>
      </div>
      <CustomButton inverted onClick={() => addToCart(item)}>Add To Cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
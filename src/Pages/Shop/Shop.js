import React, { Component } from "react"
import "./shop.scss"
import SHOP_DATA from "./shopData"
import Collection from "../../Components/Collection/Collection"

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state
    return(
      <div>
        {
          collections.map(({ id, ...otherCollectionProps }) => {
            return (
              <Collection key={id} {...otherCollectionProps} />
            )
          })
        }
      </div>
    )
  }
}

export default Shop
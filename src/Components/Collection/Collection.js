import React from "react"
import "./collection.scss"
import CollectionItem from "../CollectionItem/CollectionItem"

const Collection = ({ title, items }) => {
  return(
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Collection
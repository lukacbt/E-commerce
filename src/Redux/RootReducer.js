import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import cartDropdownReducer from "./cartdropdown/cartDropdownReducer"

export default combineReducers({
  user: userReducer,
  cart: cartDropdownReducer
})
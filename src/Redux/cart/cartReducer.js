import { cartTypes } from "./cartTypes"
import { addItemToCart, decreaseQuantity } from "./cartUtils"

const INITIAL_STATE = {
	showCart: false,
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
		case cartTypes.TOGGLE_CART_DROPDOWN: 
			const prevState = state.showCart
			return {
				...state,
				showCart: !prevState
			}
		case cartTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		case cartTypes.REMOVE_FROM_CART:
			const removedFromCart = state.cartItems.filter(item => item.id !== action.payload.id)
			return {
				...state,
				cartItems: removedFromCart
			}
		case cartTypes.DECREASE_QUANTITY:
			return {
				...state,
				cartItems: decreaseQuantity(state.cartItems, action.payload)
			}
		default:
			return state
	}
}

export default cartReducer
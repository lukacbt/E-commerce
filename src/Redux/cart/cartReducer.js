import { cartTypes } from "./cartTypes"


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
				cartItems: [...state.cartItems, action.payload]
			}
		default:
			return state
	}
}

export default cartReducer
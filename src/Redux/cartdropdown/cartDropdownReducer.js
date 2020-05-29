import { cartDropdownTypes } from "./cartDropdownTypes"


const INITIAL_STATE = {
	showCart: false
}

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
		case cartDropdownTypes.TOGGLE_CART_DROPDOWN: 
			const prevState = state.showCart
			return {
				...state,
				showCart: !prevState
			}
		default:
			return state
	}
}

export default cartDropdownReducer
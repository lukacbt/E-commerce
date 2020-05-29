import { cartTypes } from "./cartTypes"

export const toggleCartDropdown = () => ({
	type: cartTypes.TOGGLE_CART_DROPDOWN
})

export const addToCart = item => ({
	type: cartTypes.ADD_TO_CART,
	payload: item
})
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }  
      : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  const existingCartItem = cartItems.find(item => item.id === itemToDecrease.id)

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToDecrease.id)
  }

  return cartItems.map(
    cartItem => 
    cartItem.id === itemToDecrease.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}
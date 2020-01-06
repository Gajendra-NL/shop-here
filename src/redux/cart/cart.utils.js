export const addItemToCart = (cartItems, cartItemToAdd) => {
    const cartItemExists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (cartItemExists) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id );
    } else {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
}
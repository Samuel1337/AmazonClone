export const fetchCartItemsById = userId => (
    $.ajax({
        url: `/api/users/${userId}/cart_items`
    })
)

export const postCartItem = cartItem => (
    $.ajax({
    url: '/api/cart_items',
    method: 'POST',
    data: { cart_item: cartItem }
}))

export const updateCartItem = cartItem => (
    $.ajax({
    url: `/api/cart_items/${cartItem.id}`,
    method: 'PATCH',
    data: { cart_item: cartItem }
}))

export const destroyCartItem = cartItemId => (
    $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: 'DELETE'
}))
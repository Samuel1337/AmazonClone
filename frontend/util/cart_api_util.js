export const fetchCartItemsByUserId = userId => (
    $.ajax({
        url: `/api/users/${userId}/cart_items`
    })
)

export const postCartItem = cartItem => (
    $.ajax({
    url: '/api/cart_items',
    method: 'POST',
    data: { cartItem }
}))

export const updateCartItem = cartItem => (
    $.ajax({
    url: `/api/cart_items/${cartItem.id}`,
    method: 'PATCH',
    data: { cartItem }
}))

export const destroyCartItem = cartItemId => (
    $.ajax({
    url: `/api/cart_items/${cartItemId}`,
    method: 'DELETE'
}))
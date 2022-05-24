import * as cartItemsApiUtil from "../util/cart_api_util"

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const getCartItemsById = userId => dispatch => (
    cartItemsApiUtil.fetchCartItemsById(userId)
    .then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const createCartItem = CartItem => dispatch => (
    cartItemsApiUtil.postCartItem(CartItem)
        .then(CartItem => dispatch(receiveCartItem(CartItem)))
)

export const editCartItem = CartItem => dispatch => (
    cartItemsApiUtil.updateCartItem(CartItem)
        .then(CartItem => dispatch(updateCartItem(CartItem)))
)

export const deleteCartItem = CartItemId => dispatch => (
    cartItemsApiUtil.destroyCartItem(CartItemId)
        .then(() => dispatch(removeCartItem(CartItemId)))
)

const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
})

const receiveCartItem = cartItem => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const updateCartItem = cartItem => ({
    type: UPDATE_CART_ITEM,
    cartItem
})

const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
})
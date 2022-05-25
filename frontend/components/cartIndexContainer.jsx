import { connect } from "react-redux";
import { createCartItem, deleteCartItem, editCartItem, getCartItemsById } from "../actions/cart_actions";
import CartIndex from "./cartIndex";

const mSTP = state => ({
    cartItems: Object.values(state.entities.cart),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    getCartItemsById: userId => dispatch(getCartItemsById(userId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    editCartItem: cartItem => dispatch(editCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId))
})

export default connect(mSTP,mDTP)(CartIndex);
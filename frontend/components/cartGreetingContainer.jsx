import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCartItemsById } from "../actions/cart_actions";
import CartGreeting from "./cartGreeting";

const mSTP = state => ({
    cartItems: Object.values(state.entities.cart),
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    getCartItemsById: userId => dispatch(getCartItemsById(userId))
})

export default withRouter(connect(mSTP,mDTP)(CartGreeting));
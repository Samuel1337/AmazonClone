import { connect } from "react-redux"
import { createCartItem, editCartItem, getCartItemsById } from "../actions/cart_actions"
import { getProduct } from "../actions/product_actions"
import ProductShow from "./productShow"

const mSTP = (state, { match }) => {
    return {
        productId: match.params.productId,
        cart: state.entities.cart,
        product: state.entities.products[match.params.productId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    createCartItem: cartItem => dispatch(createCartItem(cartItem)), 
    editCartItem: cartItem => dispatch(editCartItem(cartItem)), 
    getProduct: productId => dispatch(getProduct(productId)),
    getCartItemsById: userId => dispatch(getCartItemsById(userId))
})

export default connect(mSTP,mDTP)(ProductShow);
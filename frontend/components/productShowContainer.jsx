import { connect } from "react-redux"
import { createCartItem } from "../actions/cart_actions"
import { getProduct } from "../actions/product_actions"
import ProductShow from "./productShow"

const mSTP = (state, { match }) => {
    return {
        productId: match.params.productId,
        product: state.entities.products[match.params.productId],
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    createCartItem: cartItem => dispatch(createCartItem(cartItem)), 
    getProduct: productId => dispatch(getProduct(productId))
})

export default connect(mSTP,mDTP)(ProductShow);
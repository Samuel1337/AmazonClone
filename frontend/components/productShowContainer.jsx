import { connect } from "react-redux"
import { getProduct } from "../actions/product_actions"
import ProductShow from "./productShow"

const mSTP = ({ entities }, { match }) => {
    return {
        productId: match.params.productId,
        product: entities.products[match.params.productId]
    }
}

const mDTP = dispatch => ({
    getProduct: productId => dispatch(getProduct(productId))
})

export default connect(mSTP,mDTP)(ProductShow);
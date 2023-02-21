import { connect } from "react-redux"
import { getProduct } from "../actions/product_actions";
import GridItem from "./gridItem";

const mSTP = (state, ownProps) = state => {
    return {
        category: ownProps.match.category
    }
}

const mDTP = dispatch => ({
    getProduct: productId => dispatch(getProduct(productId))
})

export default connect(mSTP, mDTP)(GridItem);
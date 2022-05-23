import { connect } from "react-redux";
import { createReview, deleteReview, editReview } from "../actions/review_actions";
import { getProduct } from "../actions/product_actions";
import ReviewForm from "./reviewForm";

const mSTP = (state, { match }) => {
    return {
        product: state.entities.products[match.params.productId],
        currentUser: state.entities.users[state.session.id],
        formType: "Create Review"
    }
}

const mDTP = dispatch => ({
    getProduct: productId => dispatch(getProduct(productId)),
    action: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP,mDTP)(ReviewForm);
import { connect } from "react-redux";
import { createReview, deleteReview, editReview } from "../actions/review_actions";
import { getProduct } from "../actions/product_actions";
import ReviewForm from "./reviewForm";

const mSTP = (state, { match }) => {
    return {
        review: state.entities.reviews[match.params.reviewId],
        product: state.entities.products[match.params.productId],
        currentUser: state.entities.users[state.session.id],
        formType: "Edit Review"
    }
}

const mDTP = dispatch => ({
    getProduct: productId => dispatch(getProduct(productId)),
    action: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP,mDTP)(ReviewForm);
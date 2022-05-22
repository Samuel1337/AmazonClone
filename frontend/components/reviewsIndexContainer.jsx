import { connect } from "react-redux"
import { createReview, deleteReview, editReview } from "../actions/review_action";
import ReviewsIndex from "./reviewsIndex"

const mSTP = ({ entities }, { match }) => ({
    product: entities.products[match.params.productId],
    reviews: entities.reviews
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewsIndex);
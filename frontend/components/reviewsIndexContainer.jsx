import { connect } from "react-redux"
import { createReview, deleteReview, editReview } from "../actions/review_action";
import ReviewsIndex from "./reviewsIndex"

const mSTP = (state, { match }) => ({
    currentUser: state.entities.users[state.session.id],
    reviews: state.entities.reviews
});

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mSTP, mDTP)(ReviewsIndex);
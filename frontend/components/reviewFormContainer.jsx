import { connect } from "react-redux"
import ReviewForm from "./reviewForm";

const mSTP = (state, { match }) => ({
    product: state.entities.product[match.params.productId],
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP,mDTP)(ReviewForm);
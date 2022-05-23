import * as reviewsApiUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const createReview = review => dispatch => (
    reviewsApiUtil.postReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const editReview = review => dispatch => (
    reviewsApiUtil.updateReview(review)
        .then(review => dispatch(changeReview(review)))
)

export const deleteReview = reviewId => dispatch => (
    reviewsApiUtil.destroyReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const changeReview = review => ({
    type: EDIT_REVIEW,
    review
});

const removeReview = reviewId => ({ 
    type: REMOVE_REVIEW,
    reviewId
})
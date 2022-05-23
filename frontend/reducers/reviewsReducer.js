import { RECEIVE_PRODUCT } from "../actions/product_actions";
import { EDIT_REVIEW, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";


const reviewsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);
    console.log(action)
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({},  action.product.reviews)
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        case EDIT_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review})
        case REMOVE_REVIEW:
            const newState = Object.assign({}, oldState)
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";


const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            console.log(action.errors)
            return Object.assign({}, state, {errors: action.errors.responseJSON});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {errors: []})
        default:
            return state;
    }
}

export default sessionErrorsReducer;
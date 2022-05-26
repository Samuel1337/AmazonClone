import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "../actions/cart_actions";


const cartReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.payload.cartItems);
        case RECEIVE_CART_ITEM:
            return Object.assign({}, oldState, {[action.cartItem.id]: action.cartItem});
        case UPDATE_CART_ITEM:
            return Object.assign({}, oldState, {[action.cartItem.id]: action.cartItem});
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, oldState);
            delete newState[action.cartItem.id];
            return newState;
        default:
            return oldState;
    }
}

export default cartReducer;
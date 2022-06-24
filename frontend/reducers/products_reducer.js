import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from "../actions/cart_actions";
import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, RECEIVE_SEARCH } from "../actions/product_actions";


const productsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            return Object.assign({}, {[action.product.id]: action.product})
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.payload.products);
        case REMOVE_CART_ITEM:
            let newState = Object.assign({}, oldState);
            delete newState[action.cartItem.product_id];
            return newState;
        case RECEIVE_SEARCH:
            return Object.assign({}, action.products);
        default:
            return oldState;
    }

}

export default productsReducer;
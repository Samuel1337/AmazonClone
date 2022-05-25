import { RECEIVE_CART_ITEMS } from "../actions/cart_actions";
import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";


const productsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            return Object.assign({}, {[action.product.id]: action.product})
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.payload.products);
        default:
            return oldState;
    }

}

export default productsReducer;
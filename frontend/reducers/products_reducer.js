import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions";


const productsReducer = (oldState = {}, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            return Object.assign({}, {[action.product.id]: action.product})
        default:
            return oldState;
    }

}

export default productsReducer;
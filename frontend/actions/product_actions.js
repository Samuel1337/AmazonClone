import { fetchAllProducts, fetchCategoryProducts, fetchProduct, search } from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_ERRORS = 'CLEAR_SEARCH_ERRORS';

export const getAllProducts = () => dispatch => fetchAllProducts()
    .then(products => dispatch(receiveProducts(products)));

export const getCategoryProducts = category => dispatch => fetchCategoryProducts(category)
    .then(products => dispatch(receiveProducts(products)));

export const getProduct = productId => dispatch => fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)));

export const searchProduct = query => dispatch => search(query)
    .then(products => dispatch(receiveSearchProducts(products)))
    .fail(err => dispatch(receiveSearchErrors(err)));

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const clearProducts = () => ({
    type: CLEAR_PRODUCTS
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

const receiveSearchProducts = products => ({
    type: RECEIVE_SEARCH,
    products
});

const receiveSearchErrors = err => ({
    type: RECEIVE_SEARCH_ERRORS,
    err
});

export const clearSearchErrors = () => ({
    type: CLEAR_SEARCH_ERRORS
});
import { fetchAllProducts, fetchCategoryProducts, fetchProduct, search } from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const getAllProducts = () => dispatch => fetchAllProducts()
    .then(products => dispatch(receiveProducts(products)));

export const getCategoryProducts = category => dispatch => fetchCategoryProducts(category)
    .then(products => dispatch(receiveProducts(products)));

export const getProduct = productId => dispatch => fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)));

export const searchProduct = query => dispatch => search(query)
    .then(products => dispatch(receiveSearchListings(products)),
    (err) => dispatch(receiveErrors(err.responseJSON)));

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

const receiveSearchProducts = products => ({
    type: RECEIVE_SEARCH,
    products
})
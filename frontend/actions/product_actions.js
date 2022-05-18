import { fetchProduct, fetchProducts } from "../util/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const getAllProducts = () => dispatch => fetchAllProducts()
    .then(products => dispatch(receiveProducts(products)));

export const getCategoryProducts = categoryId => dispatch => fetchCategoryProducts(categoryId)
    .then(products => dispatch(receiveProducts(products)));

export const getProduct = productId => dispatch => fetchProduct(productId)
    .then(product => dispatch(receiveProduct(product)));

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveProduct = product => ({
    type: RECEIVE_PRODUCTS,
    product
});


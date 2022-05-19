import { getAllProducts, getCategoryProducts } from "../actions/product_actions";
import { connect } from "react-redux"
import CategoryIndex from "./categoryIndex"

const selectCategoryProducts = (products, category) => {

    
    let res = Object.values(products).map(product => {
        if (product.category === category) {
            return product;
        }
    });
    return res;
}

const mSTP = (state, { match }) => {
    return {
        category: match.params.category,
        products: selectCategoryProducts(state.entities.products, match.params.category)
}}

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()), 
    getCategoryProducts: category => dispatch(getCategoryProducts(category)) 
})

export default connect(mSTP, mDTP)(CategoryIndex);
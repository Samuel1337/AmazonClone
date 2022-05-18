import { getAllProducts, getCategoryProducts } from "../actions/product_actions";
import { connect } from "react-redux"
import CategoryIndex from "./categoryIndex"

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()), 
    getCategoryProducts: categoryId => dispatch(getCategoryProducts(categoryId)) 
})

export default connect(_, mDTP)(CategoryIndex);
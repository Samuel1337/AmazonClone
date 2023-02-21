import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { getAllProducts, getCategoryProducts } from "../actions/product_actions";
import Categories from "./categories"

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryProducts: category => dispatch(getCategoryProducts(category))
})

export default withRouter(connect(null, mDTP)(Categories));
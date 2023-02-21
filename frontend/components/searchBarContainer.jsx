import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { clearProducts, clearSearchErrors, getAllProducts, getCategoryProducts, searchProduct } from "../actions/product_actions";
import SearchBar from "./searchBar"

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryProducts: category => dispatch(getCategoryProducts(category)),
    searchProduct: query => dispatch(searchProduct(query)),
    clearSearchErrors: () => dispatch(clearSearchErrors()),
    clearProducts: () => dispatch(clearProducts())
})

export default withRouter(connect(null, mDTP)(SearchBar));

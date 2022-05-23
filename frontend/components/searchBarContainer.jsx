import { connect } from "react-redux"
import { getAllProducts, getCategoryProducts } from "../actions/product_actions";
import SearchBar from "./searchBar"


const mSTP = state => ({
    products: Object.values(state.entities.products)
})

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    getCategoryProducts: category => dispatch(getCategoryProducts(category))
})

export default connect(_, mDTP)(SearchBar);
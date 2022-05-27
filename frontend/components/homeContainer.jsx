import { connect } from "react-redux"
import { getAllProducts } from "../actions/product_actions";
import Home from "./home"

const mSTP = ({ entities }) => ({
    products: Object.values(entities.products)
})

const mDTP = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mSTP, mDTP)(Home);
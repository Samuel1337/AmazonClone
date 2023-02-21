import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { getProduct } from "../actions/product_actions";
import { logout } from "../actions/session_actions";
import Greeting from "./greeting"

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getProduct: productId => dispatch(getProduct(productId))
})

export default withRouter(connect(mSTP, mDTP)(Greeting));
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { login } from "../actions/session_actions";
import SessionForm from "./sessionForm"


const mSTP = state => ({
    errors: state.errors.session.errors,
    formType: 'Log In'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mSTP,mDTP)(SessionForm);
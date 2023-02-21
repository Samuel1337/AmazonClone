import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { clearErrors, login } from "../actions/session_actions";
import SessionForm from "./sessionForm"


const mSTP = state => ({
    errors: state.errors.session.errors,
    formType: 'Sign-In'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: user => dispatch(login(user))
})

export default connect(mSTP,mDTP)(SessionForm);
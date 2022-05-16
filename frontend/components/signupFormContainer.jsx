import { signup } from "../actions/session_actions";
import { connect } from "react-redux";
import SessionForm from "./sessionForm";

const mSTP = state => ({
    errors: state.errors.session.errors,
    formType: 'Sign Up'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP,mDTP)(SessionForm);
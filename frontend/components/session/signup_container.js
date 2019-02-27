import {connect} from "react-redux";
import { signUp, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import React from 'react'
const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
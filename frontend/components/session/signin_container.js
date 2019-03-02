import { connect } from "react-redux";
import { signIn, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import React from 'react';
import {Link} from 'react-router-dom'

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: "Sign In",
})

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signIn(user)),
  clearErrors: () => dispatch(clearErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
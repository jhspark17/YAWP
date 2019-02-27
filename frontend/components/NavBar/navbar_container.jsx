import React from 'react';
import {connect} from 'react-redux';
import NavBar from './navbar';
import { signOut } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
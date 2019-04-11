import React from 'react';
import {connect} from 'react-redux';
import NavBar from './navbar';
import { signOut, demoSignIn } from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
  currentUserId: state.session.currentUser,
  currentUser: state.entities.users[state.session.currentUser]
  })
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  demoSignIn: (demoUser) => dispatch(demoSignIn(demoUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
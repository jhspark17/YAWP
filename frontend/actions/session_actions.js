// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)
// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)
import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

const logoutCurrentUser = () => ({
  type: RECEIVE_CURRENT_USER,
  
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = (user) => dispatch => (
  SessionApiUtil.signUp(user)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
))
);


export const signIn = (user) => dispatch => (
  SessionApiUtil.signIn(user)
    .then(user => (dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))  
);

export const signOut = () => dispatch => (
  SessionApiUtil.signOut()
    .then(user => (dispatch(logoutCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const clearErrors = () => (
  dispatch(receiveErrors([]))
);


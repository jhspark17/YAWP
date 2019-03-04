import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const demoUser = {
      email: "demo@email.com",
      password: "password123"
    }
export const signUp = (user) => dispatch => (
  SessionApiUtil.signUp(user)
    .then(user => (dispatch(receiveCurrentUser(user))), 
          err => (dispatch(receiveErrors(err.responseJSON))) 
  )
);


export const signIn = (user) => dispatch => (
  SessionApiUtil.signIn(user)
    .then(user => (dispatch(receiveCurrentUser(user))), 
          err => (dispatch(receiveErrors(err.responseJSON))
    ))  
);

export const demoSignIn = () => dispatch => {
  
  return (SessionApiUtil.signIn(demoUser)
    .then(user => (dispatch(receiveCurrentUser(user))),
      err => (dispatch(receiveErrors(err.responseJSON))
      )))
};

export const signOut = () => dispatch => (
  SessionApiUtil.signOut()
    .then(() => (dispatch(logoutCurrentUser())
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const clearErrors = () => (
  dispatch(receiveErrors([]))
);


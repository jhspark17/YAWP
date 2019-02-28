import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from "./store/store";
import {signOut} from "./actions/session_actions"
document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      entities: {users: {[window.currentUser.id]: window.currentUser}},
      session: {currentUser: window.currentUser.id}
    };
  }
  store = configureStore(preloadedState);
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signOut = signOut;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
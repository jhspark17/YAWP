import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {RECEIVE_BUSINESS} from '../actions/business_actions'; 


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge(newState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_BUSINESS:
      newState = merge(newState, action.payload.users);
      return newState
    default:        
      return state;
  }
};

export default usersReducer;
import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from "../actions/business_actions";

const businessesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return Object.assign(newState, {[action.business.id]: action.business});
    default:
      return oldState;
  }
};

export default businessesReducer;
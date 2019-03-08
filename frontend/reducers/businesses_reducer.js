import {RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS} from "../actions/business_actions";

const businessesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      newState = Object.assign({}, oldState, { [action.payload.business.id]: action.payload.business } )
      return newState;
    default:
      return oldState;
  }
};

export default businessesReducer;
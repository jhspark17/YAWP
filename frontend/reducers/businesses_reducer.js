import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  RECEIVE_SPECIFIC_BUSINESSES
} from "../actions/business_actions";

const businessesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, action.payload.businesses)
    case RECEIVE_BUSINESS:
      newState = Object.assign({}, { [action.payload.business.id]: action.payload.business } )
      return newState;
    case RECEIVE_SPECIFIC_BUSINESSES:
      return Object.assign({}, action.payload.businesses);
    default:
      return oldState;
  }
};

export default businessesReducer;
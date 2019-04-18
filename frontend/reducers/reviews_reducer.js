import { RECEIVE_REVIEW, REMOVE_REVIEW} from "../actions/review_actions";
import {RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES} from "../actions/business_actions"
import {merge} from 'lodash'
const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);
  console.log(action.type)
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, action.payload.reviews)
    case RECEIVE_BUSINESS:
       return Object.assign({},action.payload.reviews); 
    case RECEIVE_REVIEW:
      newState = merge(newState, { [action.review.id]: action.review });
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.reviewId];
      return newState;
    default:
     return newState;
  }
};

export default reviewsReducer;